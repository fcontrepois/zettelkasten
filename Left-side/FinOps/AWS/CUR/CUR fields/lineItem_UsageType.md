# lineItem/UsageType

#level100 #cur #finops #curfield

## Source
- Category: [[Line item details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/Lineitem-columns.html#l-U)

## Relevant notes
Most of the content of this field have a dedicated column making it not as useful as it could be. 

## Notes
The usage type describes what is being used. For instances it looks like `USW2-BoxUsage:m2.2xlarge` describing in one string the region, the instance type, the generation and the size. 

This could be part of a key in a [[Fact table]] (not tested yet)