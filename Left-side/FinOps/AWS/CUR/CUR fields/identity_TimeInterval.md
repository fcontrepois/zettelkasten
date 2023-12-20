# identity/TimeInterval

#level100 #cur #finops #curfield

This field gives the interval this line applies to. It can be minutes, hours, days or even month.

## Source
- Category: [[Identity details]] 
- [AWS Documentation](https://docs.aws.amazon.com/cur/latest/userguide/identity-columns.html) 

## Relevant Notes
- This field plus [[identity_LineItemId]] may to provide a [[Primary keys for the CUR]]

## Notes
- Provide start and end of the row. This information is then replicated into two fields [[lineItem_UsageEndDate]] and [[lineItem_UsageStartDate]]
- TimeInterval is what makes me think that inside AWS the CUR files are managed as a [[Fact table]] as in the current format they are not of great use. 