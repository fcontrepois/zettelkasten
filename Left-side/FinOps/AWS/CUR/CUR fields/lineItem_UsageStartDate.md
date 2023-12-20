# lineItem/UsageStartDate

#level100 #cur #finops #curfield

Category: [[Line item details]]

## Documentation
[AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/Lineitem-columns.html#l-U)

## Notes
- Each line in the CUR refers to a period of time that can be as short as a second or longer.
- This field and its sibling [[lineItem_UsageEndDate]] identify with precision the time range of the line.
- [[lineItem_UsageStartDate]] and [[lineItem_UsageEndDate]] and [[lineItem_UsageAmount]] are connected. If the [[pricing_unit]] is hours then a 1 hour interval will correspond to a 1 unit consumed. 