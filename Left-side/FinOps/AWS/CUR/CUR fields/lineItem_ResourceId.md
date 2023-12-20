---
created: 2022-07-12
updated: 2022-07-13
---
# lineItem/ResourceId

#level100 #cur #finops #curfield  #curtoanonymise

## Source
- Category: [[Line item details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/Lineitem-columns.html#l-R)

## Relevant notes

## Notes
- this is an optional field and its presence is defined based on a tick box while configuring CUR files
- There are some services that do not have an identifier, like data-transfer, API requests, credit, tax, and others.
- This field tells which specific resource that this line applies to. 
- The following table might not be exhaustive and is taken from the [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/Lineitem-columns.html#l-R) as of 2021-10-03


| AWS service                               | Resource identifier                   |
| ----------------------------------------- | ------------------------------------- |
| Amazon CloudFront                         | Distribution ID                       |
| Amazon CloudSearch                        | Search domain                         |
| Amazon DynamoDB                           | DynamoDB table                        |
| Amazon Elastic Compute Cloud - Amazon EBS | Amazon EBS volume                     |
| Amazon Elastic Compute Cloud              | Instance ID                           |
| Amazon Elastic Compute Cloud - CloudWatch | CloudWatch charges for an instance ID |
| Amazon EMR                                | MapReduce cluster                     |
| Amazon ElastiCache                        | Cache cluster                         |
| Amazon OpenSearch Service                 | Search domain                         |
| Amazon S3 Glacier                         | Vault                                 |
| Amazon Relational Database Service        | Database                              |
| Amazon Redshift                           | Amazon Redshift cluster               |
| Amazon Simple Storage Service             | Amazon S3 bucket                      |
| Amazon Virtual Private Cloud              | VPN ID                                |
| AWS Lambda                                | Lambda function name                  |