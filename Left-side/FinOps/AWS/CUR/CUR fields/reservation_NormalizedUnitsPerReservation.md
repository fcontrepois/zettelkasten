#  reservation/NormalizedUnitsPerReservation

#level100 #cur #finops #curfield

## Source
- Category: [[Reservation details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/reservation-columns.html#r-N)
- [[lineItem_LineItemType]]: RIFee

## Relevant notes
- This line only applies to  [[Reserved Instances]]


## Notes
- From the doc, this applies only to RDS, but that is not true
- This value should match the number of hours this reservation can consume during a month.
	- Unless this is the first, or the last month of the reservation, this value should be 720 for 30 days month and 744 for 31 days month (I ignore feb :) )

- 
- The number of normalized units  [[to check]] [[to complete]]