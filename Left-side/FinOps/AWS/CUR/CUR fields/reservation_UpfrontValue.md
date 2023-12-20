#  reservation/UpfrontValue
#level100 #cur #finops #curfield

## Source
- Category: [[Reservation details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/reservation-columns.html#r-U)
- [[lineItem_LineItemType]]: RIFee

## Relevant notes
- This line only applies to  [[Reserved Instances]]

## Notes
- For partial-upfront and full-upfront RI this is the value that was paid upfront.
- This value is 0 for nothing-upfront RI
- This is left for reference only and not used for monthly billing as the charge was documented the month of the RI acquisition by a [[lineItem_LineItemType#Fee]] line 
