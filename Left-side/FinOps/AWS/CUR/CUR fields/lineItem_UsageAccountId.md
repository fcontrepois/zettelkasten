---
created: 2022-07-12
updated: 2022-07-13
---
# lineItem/UsageAccountId

#level100 #cur #finops #curfield #curtoanonymise

## Source
- Category: [[Line item details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/Lineitem-columns.html#l-U)

## Relevant notes

## Notes
- The account number that this line refers to
- It is a series of numbers that identify a single account
- This is a very important fields as the account level can be considered the boundaries of cost. 
	- Outside of an organisation the account defines the boundaries of cost
	- When the account belong to an organisation (i.e. is a linked account) then aggregate savings from the [[300 - portfolio savings]] are assigned randomly making the account less accurate.