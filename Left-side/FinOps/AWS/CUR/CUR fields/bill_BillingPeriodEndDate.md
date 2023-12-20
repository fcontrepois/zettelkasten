---
created: 2022-07-12
updated: 2022-07-13
---
# bill/BillingPeriodEndDate

#level100 #cur #finops #curfield

Identify the end of the [[billing period]] the row in the CUR refers to. Most of the time this is the last day and hour of the month.

## Source
- Category: [[Billing details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/billing-columns.html)

## Relevant notes
[[bill_BillingPeriodStartDate]] is the twin but for the start of the [[billing period]]

## Notes
- Format is `YYYY-MM-DDTHH:mm:ssZ`.
- Timezone is UTC