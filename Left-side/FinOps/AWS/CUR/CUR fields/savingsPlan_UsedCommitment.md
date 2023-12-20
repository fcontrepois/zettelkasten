# savingsPlan/UsedCommitment

#level100 #cur #finops #curfield

## Source
- Category: [[Savings Plans details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/savingsplans-columns.html#sp-U)
- [[lineItem_LineItemType]]: SavingsPlanRecurringFee

## Relevant notes
- This line only applies to  [[Savings plans]]

## Notes
- How much of the SP commitment has been used
	- Note how this is different from how [[Reserved Instances]] are managed. RIs have a single monthly value that reduce over time while SP have a consumed value and what is left can be calculated using [[savingsPlan_TotalCommitmentToDate]] [[to check]]
- The total dollar amount of the Savings Plan commitment used: ([[savingsPlan_SavingsPlanRate]] \* [[lineItem_UsageAmount]]