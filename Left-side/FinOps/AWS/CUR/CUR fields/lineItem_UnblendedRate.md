# lineItem/UnblendedRate

#level100 #cur #finops #curfield

## Source
- Category: [[Line item details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/Lineitem-columns.html#l-U)

## Relevant notes
- used to calculate the [[lineItem_UnblendedCost]] 
- The [[lineItem_UnblendedCost]] is the [[lineItem_UnblendedRate]] multiplied by the [[lineItem_UsageAmount]]

## Notes
- The rate used for that specific line item

If the usage is covered by an RI then there are two lines in the CUR to describe it. One line describes the usage and has [[lineItem_UnblendedRate]] to zero and another line with [[lineItem_LineItemType]] of _DiscountedUsage_ to do the biling correctly. 

My guess about this behaviour is that there is a first CUR created with only usage data and standard costs, and then a second process does the RI coverage calculations and resets the [[lineItem_UnblendedRate]] to zero and creates the _DiscountedUsage_  lines