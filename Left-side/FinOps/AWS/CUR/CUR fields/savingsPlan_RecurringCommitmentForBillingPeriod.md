# savingsPlan/RecurringCommitmentForBillingPeriod

#level100 #cur #finops #curfield

## Source
- Category: [[Savings Plans details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/savingsplans-columns.html#sp-R)
- [[lineItem_LineItemType]]: SavingsPlanRecurringFee

## Relevant notes
- This line only applies to  [[Savings plans]]

## Notes
- The value of the one-per-month fee - recurring fee - for the SP. 
- The value non-zero for *Partial*, and *No-Upfront* SP
	- and zero for *Full-Upfront* as all the upfronting is already done
- This value is the starting point for [[amortisation]]
- This value does not change to reflect [[amortisation]] over the month, it is the initial value
