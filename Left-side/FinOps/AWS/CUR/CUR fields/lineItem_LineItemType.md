---
created: 2023-01-21
updated: 2023-01-21
---
#  lineItem/LineItemType
#level100 #cur #finops #curfield 

One of the most interesting field in the CUR. LineItemType is perfect to find if a line refers to credit, usage, fees and other types of lines.

This field is used to select the type of row on which to perform calculations.

Category: [[Line item details]]

## Documentation
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/Lineitem-columns.html)

## Notes
### Credit
used when a credit is applied. [[lineItem_LineItemDescription]] will contain more details on what the credit is for

### DiscountedUsage ^d28411
DiscountedUsage to describe usage being covered by a [[Reserved Instances]]. 

### Fee
when a [[Reserved Instances]] is bought as partial, or full upfront payment, this type of line will show up.
Also known as upfront annual subscription fees

### Refund
A negative charge to refund money. [[PPA]] and [[Egress Waiver]] are shown this way. It important to remember that the refund type can be added the following month after AWS does their calculation

### RIFee
The monthly recurring fee for subscriptions. This is the monthly cost of the RI. This field does not change over the course of the month. The equivalent dynamic field is 
This field is very important for [[amortisation]] calculations

### Tax
tax applied, like VAT 
### Usage
any usage at on-demand
### SavingsPlanUpfrontFee
Any one-time upfront fee from your purchase of an All Upfront or Partial Upfront Savings Plan. [SP documentation](https://docs.aws.amazon.com/cur/latest/userguide/cur-sp.html)
### SavingsPlanRecurringFee
the monthly fee applied for partial-upfront and no-upfront savings plans
	- It is the equivalent of the RIFee for SavingsPlan. [SP documentation](https://docs.aws.amazon.com/cur/latest/userguide/cur-sp.html)
### SavingsPlanCoveredUsage
on-demand usage that is covered by a savings plan. [SP documentation](https://docs.aws.amazon.com/cur/latest/userguide/cur-sp.html)
### SavingsPlanNegation
a line that cancel a savings plan covered usage line so that only the SavingsPlanRecurringFee is effectively applied but what has been covered is known thanks to SavingsPlanCoveredUsage and SavingsPlanNegation. [SP documentation](https://docs.aws.amazon.com/cur/latest/userguide/cur-sp.html)