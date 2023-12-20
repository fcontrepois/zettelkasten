#  reservation/EndTime

#level100 #cur #finops #curfield

## Source
- Category: [[Reservation details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/reservation-columns.html#r-E)
- [[lineItem_LineItemType]]: RIFee

## Relevant notes
- This line only applies to  [[Reserved Instances]]
- Goes hand in hand with [[reservation_StartTime]]

## Notes
- - The end time of the RI contract. Usually before the current usage month except when the RI is expiring this month.
- This field gives an information about the full reservation, not just the current month. A 3 years RI will have and [[reservation_EndTime]] that is 3 years after the [[reservation_StartTime]] 
- It has an hourly precision