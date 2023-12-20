#  reservation/UnusedAmortizedUpfrontFeeForBillingPeriod
#level100 #cur #finops #curfield

## Source
- Category: [[Reservation details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/reservation-columns.html#r-U)
- [[lineItem_LineItemType]]: RIFee

## Relevant notes
- This line only applies to  [[Reserved Instances]]

## Notes
- How much of the upfront fee has not been yet consumed. This value is in the RIFee [[lineItem_LineItemType]] and will *change at every new cur delivery* as 
- At the first hour of a new month, this value is the full amount of the amortised upfront fee, as nothing is yet consumed. 
- Each time a DiscountedUsage line is created - a VM is consuming the RI - this value is updated as part of the upfront fee is being consumed. 
- In a graph, this field starts like a spike that reduces when the RI is used
- At the end of the month whatever is left in this field has been wasted.     
- This value is 0 for no-upfront RI