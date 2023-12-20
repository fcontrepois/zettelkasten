#  reservation/ AmortizedUpfrontFeeForBillingPeriod

#level100 #cur #finops #curfield

## Source
- Category: [[Reservation details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/reservation-columns.html#r-A)
- [[lineItem_LineItemType]]: RIFee

## Relevant notes
- This line only applies to  [[Reserved Instances]]
- As this is for a specifc [[billing period]], the column is filled when [[lineItem_LineItemType]] is RIFee
- The equivalent for usage is [[reservation_AmortizedUpfrontCostForUsage]]

## Notes
- The initial upfront payment for all upfront RIs and partial upfront RIs amortized for the period between [[bill_BillingPeriodStartDate]] and [[bill_BillingPeriodEndDate]].
- For no-upfront RI as there is upfront cost to amortise, so the value in this column is zero.