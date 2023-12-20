---
tags: level100, cur finops, curfield
publish: true
created: 2022-07-07
updated: 2022-07-07
---

# product/deploymentoption

This field is important is for RDS databases and indicates if an instance is deployed in a single availability zone, showing as `Single-AZ`, or a deployed in many zones (in the same region), showing as `Multi-AZ`

## Source
- Category: [[Product details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/product-columns.html#product-details-D)

## Relevant notes
- Use this column to filter RDS in high-availability configuration

## Notes
- A Multi-AZ RDS instance is an instance that is replicated in another zone in the same region. Both instances are up and running, the standby instance is  not accessible, but can be made active in the event of a problem. [Additional documentation](https://aws.amazon.com/rds/features/multi-az/)
- Multi-AZ instances have twice the number of [[lineItem_NormalizationFactor]] than Single-AZ instances.