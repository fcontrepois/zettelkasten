#level100 #cur #finops 

## Source
- [AWS documentation - Reserved Instance pricing](https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/)
- [AWS documentation - # Understanding your reservations](https://docs.aws.amazon.com/cur/latest/userguide/understanding-ri.html)

## Relevant notes

RIFee lines and DiscountedUsage lines are connected via the [[reservation_ReservationARN]]

### Math and checks
[[to complete]] with Athena Queries and the [cur documentation](https://docs.aws.amazon.com/cur/latest/userguide/reservation-columns.html)
-  [[reservation_TotalReservedUnits]] = [[reservation_NormalizedUnitsPerReservation]] * [[reservation_NumberOfReservations]]
- [[reservation_NormalizedUnitsPerReservation]] = [[lineItem_NormalizationFactor]] * [[reservation_NormalizedUnitsPerReservation]]

## Notes
There are three  [[lineItem_LineItemType]] relevant to Reserved Instances. 
- Fee when the initial upfront fee is paid. Valid for partial-upfront and full-upfront. There is no Fee line for nothing-upfront. [[to check]]
- RIFee which represent the reservation(i.e. commitment) contract. And include  
- DiscountedUsage which represent the consumption of the contract. 

### Different types of fees
- Upfront fee. 
- Recurring - Monthly - fee

### Subscriptions vs Reservations vs offer [[to complete]]
- As there is a direct 1-to-1 mapping between [[reservation_SubscriptionId]] and [[reservation_ReservationARN]], they seems to be synonyms. 
- The only difference I see is that the documentation for [[reservation_SubscriptionId]] also include Usage while the [[reservation_ReservationARN]] does not. 
- There is a [[reservation_SubscriptionId]] even when there is no reservation, in which case the [[reservation_ReservationARN]] is empty or null.
- [[to check]]

### RIFee
- Represent the commitment contract.  [[to complete]]
	- Some fields are month specific
		- [[reservation_AmortizedUpfrontFeeForBillingPeriod]]
	- Some fields are contract specific
		- [[reservation_StartTime]]
		- [[reservation_EndTime]]
- Is like a mix of information and a pool for unused resources available for consumption
- Some values in the RIFee line change everytime a CUR is updates, as resources (i.e. DiscountedUsage lines) are consumed.
- Represent the static aspect of the RI and is updated based on the DiscountedUsage rows
- contains the details of the RI and also what is left to consume for the month
- one line per month per RI. 
- RIFee contains month level values 
- Unused RI amortised dollars are in the RIFee lineitem
	- At the beginning of the month all the potential value of the RI is all in the RIFee line and gets consumed throughout the month. 

### DiscountedUsage 
- Represent the use of part of the commitment contract
- Describe how the resources initially available in the RIFee have been consumed
- Usually on an hourly basis
- Represent the Dynamic part of RI consumption
