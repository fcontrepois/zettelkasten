#  reservation/RecurringFeeForUsage

#level100 #cur #finops #curfield

## Source
- Category: [[Reservation details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/reservation-columns.html#r-R)
- [[lineItem_LineItemType]]: DiscountedUsage

## Relevant notes
- This line only applies to  [[Reserved Instances]]

## Notes
- This is the amortised amount of the RI monthly fee for the usage described in this line. I.e. [[lineItem_UsageEndDate]] - [[lineItem_UsageStartDate]]
- [[lineItem_UnblendedCost]] of the [[lineItem_LineItemType]] of RIFee should be equa to the sum of the [[RecurringFeeForUsage]] for DiscountedUsage lines