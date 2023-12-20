---
created: 2022-12-12
updated: 2022-12-13
---
# savingsPlan/Region

#level100 #cur #finops #curfield

## Source
- Category: [[Savings Plans details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/savingsplans-columns.html#sp-R)
- [[lineItem_LineItemType]]: SavingsPlanCoveredUsage, SavingsPlanNegation, SavingsPlanUpfrontFee, SavingsPlanRecurringFee

## Relevant notes
- This line only applies to  [[Savings plans]]

## Notes
The value of the field depends on the [[savingsPlan_OfferingType]] field
- **any** for ComputeSavingsPlans  as Compute Saving plan are not region specific. 
- **a region name** for EC2 Instance Savings Plans.