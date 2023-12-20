# bill/BillingPeriodStartDate

#level100 #cur #finops #curfield

Identify the beginning of the billing period the row in the CUR refers to. Most of the time this is the first day and hour of the month.

## Source
- Category: [[Billing details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/billing-columns.html)

## Relevant notes
[[lineItem_UsageEndDate]] is the twin but for the end of the billing period

## Notes
- Format is `YYYY-MM-DDTHH:mm:ssZ`.
- Timezone is UTC