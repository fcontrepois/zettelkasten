#  reservation/UnitsPerReservation

#level100 #cur #finops #curfield

## Source
- Category: [[Reservation details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/reservation-columns.html#r-U)
- [[lineItem_LineItemType]]: Fee, RIFee, Refund, Credit

## Relevant notes
- This line only applies to  [[Reserved Instances]]

## Notes
Different for RIFee and Fee

The AWS documentation assumes 744 hours - 31 days- per month, while a better value is 730.  [[to check]]

### Fee
The total number of units reserved for the full duration of the contract. 

For one unit for one year this is 730 * 12 =8760 [[to check]]

### RIFee
The total number of units reserved for the month.

For one unit this could be 672 for 28 days, 696 for 29 days, 730 for 30 days and 744 for 31 days  [[to check]]