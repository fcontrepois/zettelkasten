---
publish: true
created: 2021-11-20
tags: finops, aws, pricing
updated: 2022-03-05
---

Assuming S3 is in all regions, then the list can be updated by running:
```
wget https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonS3/current/index.json -O - | jq '.products[].attributes.regionCode' | sort | uniq
```

[[product_region]]

As of 2021-11-20 there are 24 AWS Regions:

1. af-south-1
1. ap-east-1
1. ap-northeast-1
1. ap-northeast-2
1. ap-northeast-3
1. ap-south-1
1. ap-southeast-1
1. ap-southeast-2
1. ca-central-1
1. cn-north-1
1. eu-central-1
1. eu-north-1
1. eu-south-1
1. eu-west-1
1. eu-west-2
1. eu-west-3
1. me-south-1
1. sa-east-1
1. us-east-1
1. us-east-2
1. us-gov-east-1
1. us-gov-west-1
1. us-west-1
1. us-west-2