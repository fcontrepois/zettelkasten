#  reservation/EffectiveCost

#level100 #cur #finops #curfield

## Source
- Category: [[Reservation details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/reservation-columns.html#r-E)
- [[lineItem_LineItemType]]: DiscountedUsage

## Relevant notes
- This line only applies to  [[Reserved Instances]]
- Connected with the topic of [[amortisation]]
- calculated for the duration identify by [[lineItem_UsageStartDate]] and [[lineItem_UsageEndDate]]

## Notes
- an amortised cost that includes upfront fees (if any) and discounted price 
- [[reservation_EffectiveCost]] = [[reservation_AmortizedUpfrontCostForUsage]] + [[reservation_RecurringFeeForUsage]]