#  reservation/AmortizedUpfrontCostForUsage

#level100 #cur #finops #curfield

## Source
- Category: [[Reservation details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/reservation-columns.html#r-A)
- [[lineItem_LineItemType]]: DiscountedUsage

## Relevant notes
- This line only applies to  [[Reserved Instances]]
- As this is for a specifc usage, the column is filled when [[lineItem_LineItemType]] is DiscountedUsage
- The equivalent for [[billing period]] is [[reservation_AmortizedUpfrontFeeForBillingPeriod]]


## Notes
- The initial upfront payment for all upfront RIs and partial upfront RIs amortized for [[lineItem_UsageAmount]].
- For no-upfront RI as there is upfront cost to amortise, so the value in this column is zero even for DiscountedUsage lines
- When fully consumed, the sum of this field should be equal to [[reservation_AmortizedUpfrontFeeForBillingPeriod]]  - [[to check]]