# savingsPlan/StartTime

#level100 #cur #finops #curfield

## Source
- Category: [[Savings Plans details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/savingsplans-columns.html#sp-S)
- [[lineItem_LineItemType]]: SavingsPlanCoveredUsage, SavingsPlanNegation, SavingsPlanUpfrontFee, SavingsPlanRecurringFee

## Relevant notes
- This line only applies to  [[Savings plans]]
- Goes hand in hand with [[savingsPlan_EndTime]]

## Notes
- The start time of the SP contract. 
- This field gives an information about the full SP, not just the current month. A 3 years RI will have and [[savingsPlan_EndTime]] that is 3 years after the [[savingsPlan_StartTime]] [[to check]]
- It has an hourly precision