---
created: 2022-07-12
updated: 2022-07-13
---
#  reservation/SubscriptionId

#level100 #cur #finops #curfield #curtoanonymise

## Source
- Category: [[Reservation details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/reservation-columns.html#r-S)
- [[lineItem_LineItemType]]: Fee, RIFee, DiscountedUsage, Refund, Credit, and Usage 

## Relevant notes
- This line only applies to  [[Reserved Instances]]

## Notes
- This could be connected with a pricing offering, mapping the line with the billing price. In this case it could be useful when special discounts are applied, like [[PPA]]. [[to check]]
- A unique identifier that maps a line item with the associated offer. It is unclear what an offer is! 
- The documentation recommends to use [[reservation_ReservationARN]] instead of this field but says that both can be used. 
- There can be a subscription id even without a reservation. In this case the [[reservation_ReservationARN]] is empty. 