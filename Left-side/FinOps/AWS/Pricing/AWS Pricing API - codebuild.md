---
created: 2022-03-17
updated: 2023-01-10
publish: true
tags: finops, aws, pricing
---

### Using CodeBuild to save pricing data to S3
The Cloudbuild Buildspec I use to download all the AWS pricing data in.

```yaml
version: 0.2

phases:
  pre_build:
    commands:
      - echo Entered the install phase...
      - apt-get update
      - apt-get install jq
      - apt-get install wget
  build:
    commands:
      - echo Build started on `date`
      - echo Wget
      - wget -q -O - https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/index.json  | jq -r '.offers[].currentVersionUrl' | sed 's/\.json$/.csv/' | wget -x --quiet --base="https://pricing.us-east-1.amazonaws.com" --no-host-directories --cut-dirs=3 -i -
      - echo Removing the first five lines of each files
      - find . -name "index.csv" | while read line; do echo $line; tail -n +6 "$line" > "$line.tmp" && mv "$line.tmp" "$line" ;done
      - echo Build done
  post_build:
    commands:
      - echo Build completed on `date`
artifacts:
  files:
    - '**/*'
  name: AWS-pricing-$(date +%Y-%m-%d) 
  
```
The files are saved in the S3 indicated in the *Arfifact* section. The output format 
is s3://BUCKET/AWS-pricing-2022-03-11/AWS PRODUCT/current/index.csv

### Using CodeBuild to save pricing data to postgresql 
The codebuild environment MUST be in a private subnet, with a NAT gateway to access internet, in the same VPC of the pgsql database.
The database MUST exits (but not the tables).
```yaml
version: 0.2

phases:
  pre_build:
    commands:
      - echo Entered the pre build phase...
      - apt-get update
      - apt-get -y install jq wget sqlite postgresql-client pgloader
  build:
    commands:
      - echo Build started on `date`
      - echo Testing the Postgresql connection
      - pg_isready -d ${PGSQL_DB} -h ${PGSQL_HOST} -p ${PGSQL_PORT} -U ${PGSQL_USER} || exit 10
      - echo Wget
      - wget -q -O - https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/index.json  | jq -r '.offers[].currentVersionUrl' | sed 's/\.json$/.csv/' | wget -x --quiet --base="https://pricing.us-east-1.amazonaws.com" --no-host-directories --cut-dirs=3 -i -
      - echo Removing the first five lines of each files
      - for i in */current/index.csv; do sed -i '1,5d' $i; tbl=${i%%\/*}; sqlite3 -csv -separator ',' awspricing.db ".import $i $tbl"; done
      - echo 'pg_loader is next'
      - echo 'load database' > pgloader.cfg
      - echo '  from awspricing.db'>> pgloader.cfg
      - echo "  into postgresql://${PGSQL_USER}:${PGSQL_PWD}@${PGSQL_HOST}:${PGSQL_PORT}/${PGSQL_DB}" >> pgloader.cfg
      - echo '' >> pgloader.cfg
      - echo 'with truncate, create tables, create no indexes, prefetch rows = 10000;' >> pgloader.cfg
      - cat pgloader.cfg
      - pgloader pgloader.cfg
      - echo Build done
  post_build:
    commands:
      - echo Build completed on `date`
env:
  secrets-manager:
    PGSQL_USER: "codebuild/pgsqlpwd:username"
    PGSQL_PWD: "codebuild/pgsqlpwd:password"
    PGSQL_ENGINE: "codebuild/pgsqlpwd:engine"
    PGSQL_HOST: "codebuild/pgsqlpwd:host"
    PGSQL_PORT: "codebuild/pgsqlpwd:port"
    PGSQL_DBINSTANCEID: "codebuild/pgsqlpwd:dbInstanceIdentifier"
    PGSQL_DB: "codebuild/pgsqlpwd:dbname"
artifacts:
  files:
    - '**/*'
  name: AWS-pricing-$(date +%Y-%m-%d) 
  
```