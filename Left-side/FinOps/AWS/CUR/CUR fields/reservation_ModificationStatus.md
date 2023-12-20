#  reservation/ModificationStatus

#level100 #cur #finops #curfield

## Source
- Category: [[Reservation details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/reservation-columns.html#r-M)
- [[lineItem_LineItemType]]: RIFee

## Relevant notes
- This line only applies to  [[Reserved Instances]]

## Notes
- Tells if the reservation described by this line is original or if it has been modified. It explicitly also if AWS support was involved.

### Possible values
- Original: no change were applied to this reservation 
- System: changed were done via the console of API
- Manual: changed were done via AWS support
- ManualWithData: The purchased RI was modified using AWS Support assistance, and AWS calculated estimates for the RI. ( [[to complete]] as I do not fully understand it)