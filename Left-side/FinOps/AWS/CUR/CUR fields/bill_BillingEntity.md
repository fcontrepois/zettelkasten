---
created: 2022-07-12
updated: 2022-07-13
---
# bill/BillingEntity
#level100 #cur #finops #curfield

Identifies the seller (always an AWS subsidiary) charging this line. 

As of 2021-09-01 the options are:
- AWS 
- AISPL: for India (it seems)
- AWS Marketplace: when things are bought from the marketplace

## Source
- Category: [[Billing details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/billing-columns.html)

## Relevant notes
- [[Questions you can ask a CUR file#How much did I spend on marketplace]]?

## Notes
This field is useful to identify Marketplace acquisition which have different types of charges.