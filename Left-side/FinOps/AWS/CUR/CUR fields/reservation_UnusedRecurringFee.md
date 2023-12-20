#  reservation/UnusedRecurringFee
#level100 #cur #finops #curfield

## Source
- Category: [[Reservation details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/reservation-columns.html#r-U)
- [[lineItem_LineItemType]]: RIFee

## Relevant notes
- This line only applies to  [[Reserved Instances]]
- [[reservation_RecurringFeeForUsage]]
- [[reservation_UnusedAmortizedUpfrontFeeForBillingPeriod]] is the equivalent for upfront fees. 

## Notes
- The number of unused dollars of the [[Reserved Instances]] recurring fee not used  during this [[billing period]].
- This value is 0 for all-upfront RI