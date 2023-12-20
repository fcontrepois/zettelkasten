# pricing/term

#level100 #cur #finops #curfield

## Source
- Category: [[Pricing details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/pricing-columns.html#pr-T)
- [[lineItem_LineItemType]] (from my data):  DiscountedUsage, Fee, SavingsPlanCoveredUsage, SavingsPlanNegation, Usage, Credit

## Relevant notes

## Notes
- Whether your AWS usage is 
	- **Reserved** only for DiscountedUsage  
	- **Spot** for Credits and Usage
	- **On-Demand** for the rest. Including [[Savings plans]]
- A potentially very important field to define if the line refers to on-demand 
- The documentation wrongly states that the field can only have two values.