---
created: 2022-07-12
updated: 2022-07-13
---
#  bill/InvoiceId

#level100 #cur #finops #curfield #curtoanonymise

A field with a surprise. This field is empty for the current month and gets a value when cur becomes a [[finalised cur]]. 

## Source
- Category: [[Billing details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/billing-columns.html)

## Relevant notes

## Notes
The invoice identification for this line item. 

This field is empty until the CUR is final! This is a great way to know if what you are reading is a CUR that can be used to invoice or not. 

### Warning
Some discounts and charges based on consumption, like support cost or some discounts, will be calculated the following month. 

Until the CUR is final, meaning that this field is not null, the data in the CUR is incomplete!