#  reservation/TotalReservedUnits

#level100 #cur #finops #curfield

## Source
- Category: [[Reservation details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/reservation-columns.html#r-T)
- [[lineItem_LineItemType]]: Fee, RIFee, Refund, Credit

## Relevant notes
- This line only applies to  [[Reserved Instances]]

## Notes
Different for RIFee and Fee

The AWS documentation assumes 744 hours - 31 days- per month, while a better value is 730.  [[to check]]

### Fee
The total number of units reserved for the full duration of the contract. 

[[reservation_NumberOfReservations]] \* [[reservation_UnitsPerReservation]] taken from the Fee line

### RIFee
The total number of units reserved for the month
[[reservation_NumberOfReservations]] \* [[reservation_UnitsPerReservation]] taken from the RIFee line

