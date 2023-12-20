# pricing/publicOnDemandCost

#level100 #cur #finops #curfield

## Source
- Category: [[Pricing details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/pricing-columns.html#pr-P)
- [[lineItem_LineItemType]] (from my data): DiscountedUsage, SavingsPlanCoveredUsage, SavingsPlanNegation, Usage. 

## Relevant notes
- This line only applies to  [[Reserved Instances]]. Not to [[Savings plans]]
- [[pricing_publicOnDemandRate]]

## Notes
- The total cost at on-demand price of the line. 
- [[bad]] When the price is tiered only the highest cost is displayed. This means that discounted tiers are ignored!!!
- For Spot instances and marketplace this value is empty [[to check]]