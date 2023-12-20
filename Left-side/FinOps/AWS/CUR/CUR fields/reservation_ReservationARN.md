---
created: 2022-07-12
updated: 2022-10-20
---
#  reservation/ReservationARN

#level100 #cur #finops #curfield #curtoanonymise

## Source
- Category: [[Reservation details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/reservation-columns.html#r-R)
- [[lineItem_LineItemType]]: Fee, RIFee, DiscountedUsage, Refund, Credit

## Relevant notes
- This line only applies to  [[Reserved Instances]]

## Notes
- The [[reservation_ReservationARN]] is the value that connects RIFee - the contract (Subsciption) - and DiscountedUsage (the usage of the contract) 
	- [[to complete]] with better English
	- `arn:aws:ec2:us-east-1:074108124787:reserved-instances/1d3fbc13-f181-4c40-9dd6-12b345678de9`, `arn:aws:ec2:us-east-1:499958231354:reserved-instances/be41234c3-b5c0-403e-a80c-1cfd12345678`
- The Account ID in the ARN refers to where the reservation was acquired.