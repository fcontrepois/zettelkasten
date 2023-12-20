# savingsPlan/AmortizedUpfrontCommitmentForBillingPeriod

#level100 #cur #finops #curfield

## Source
- Category: [[Savings Plans details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/savingsplans-columns.html#sp-A)
- [[lineItem_LineItemType]]: SavingsPlanRecurringFee

## Relevant notes
- This line only applies to  [[Savings plans]]
- As this is for a specifc [[billing period]], the column is filled when [[lineItem_LineItemType]] is SavingsPlanRecurringFee
- The equivalent for usage is [[reservation_AmortizedUpfrontCostForUsage]]

## Notes
- The initial upfront payment for all-upfront SPs and partial-upfront SPs amortized for the period between [[bill_BillingPeriodStartDate]] and [[bill_BillingPeriodEndDate]].
- For no-upfront RI as there is upfront cost to amortise, so the value in this column is zero.