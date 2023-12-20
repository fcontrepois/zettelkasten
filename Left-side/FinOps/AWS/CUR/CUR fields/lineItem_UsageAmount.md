# lineItem/UsageAmount

#level100 #cur #finops #curfield

## Source
- Category: [[Line item details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/Lineitem-columns.html#l-U)

## Relevant notes
- [[How is an AWS bill calculated]]
- This indicates the usage quantity that is going to be charged. The unit of measure is different per different services and is describe in [[pricing_unit]]. Storage unit is GB, compute is hrs and so on. 

## Notes
### Directly from AWS 
The amount of usage that you incurred during the specified time period. For size-flexible Reserved Instances, use the [[reservation_TotalReservedUnits]] column instead. 

This is very important field as most costs are calculated by multiplying this value with [[lineItem_UnblendedRate]] to get [[lineItem_UnblendedCost]]