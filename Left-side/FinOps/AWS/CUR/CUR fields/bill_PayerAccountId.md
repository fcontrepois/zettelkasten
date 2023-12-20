---
created: 2022-07-12
updated: 2022-07-13
---
# bill/PayerAccountId
This is the account number that will receive the bill. 

#level100 #cur #finops #curfield #curtoanonymise

## Source
- Category: [[Billing details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/billing-columns.html)

## Relevant notes

## Notes
This is the account number that will receive the bill. A payer account is an AWS construct used to allow organisations to have a single invoice for multiple accounts. It is built using [[300 - AWS organization]]

This field is important when CUR files for different payer accounts are merge them toghether.

[[Reserved Instances]] and [[Savings plans]] are applied at the organization level, so when making [[300 - cost optimisation recommendations]] the number crunching needs to be done individually for each payer account.