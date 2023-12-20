---
tags: level100
created: 2023-01-21
updated: 2023-01-21
---
 #cur #finops 

If you know what a commitment is, and want more technical data, jump to [[commitments#For geeks]]

# Analogy to explain the concepts of commitments
Note: in finance, this is known as *forward buying* a fancy name to say if you pay upfront, you get a discount.

Let's assume that you are in London in a hotel at £100/day, so £3000/month, you can leave at any time, and you will always only pay for the time you stay. The hotel is the equivalent of on-demand pricing.  

Now let's say that you know that you will stay in London for at least one full year. 

Then you would go to the hotel management and negotiate a 12-monthly guarantee agreement. The hotel offers you a discounted price of £1000 per month for the next 12 months, and this commitment changes your monthly fee from £3000 to £1000, which is fantastic progress.

Then the hotel manager offers you the possibility of additional discounts:
- **Full upfront**  25% discount (£9000/y equivalent to £750/m) if you pay all the year upfront. So by paying £9000 all in one go, you can live in that flat for 12 months.
- **Partial upfront**12.5% discount (£10500/y equivalent to £875/m) if you pay half the year upfront and the rest each month. So you can stay in the flat by paying £5250 now and £437.5 each month for 12 months.  
- **No upfront** and no additional discount over the reduction from hotel price. You pay monthly (£12000/y and £1000/m). So £0 now and £1000 for the following 12 months.

## Analogy -> AWS
- The hotel without commitment is like a service at on-demand pricing
- The guarantee of staying for 12 months is the commitment that entitles you to a discount. [[Reserved Instances]] or [[Savings plans]].
- The possible pre-payment increases the discount and is available to RI and SP.

# For geeks
- Commitments are a way to access a discount in exchange for the guarantee of payment. 
- Commitments are a billing construct and are not tied to any instance.
- The name [[Reserved Instances]] is rubbish as no instance is involved. In financial terms, it is a forward payment: paying early to get a discount.
- The earlier you pay, the higher the discount
	- No upfront, ie. I will pay each month, gives the base discounts
	- Partial upfront, i.e. 50% now, 50% over the term, gives some additional % of discount
	- All upfront, i.e. all paid now, gives the best discount
- The longer you commit, the higher the discount. AWS offers two terms:
	- **1 year** 24\*365 -> 8760 hours as explained in the footnotes on [this page](https://aws.amazon.com/ec2/pricing/reserved-instances/pricing/)
	- **3 years **or 24\*365\*3 -> 26280 hours. It seems that leap years are ignored.
- The start and end dates of a commitment are available in the following CUR fields
	- [[reservation_StartTime]] and [[reservation_EndTime]] for [[Reserved Instances]] 
	- [[savingsPlan_StartTime]] and [[savingsPlan_EndTime]] for [[Savings plans]]

## Examples of different commitments

![[Commitment scenarios.png]]

- The example is for a 12 months commitment
- OD cost per hour: how much are the on-demand prices without commitment
- Discount: what is the discount over the OD cost in per cent
- Reduced cost per hour: this is the OD cost minus the discount per cent
- OD cost for term: *OD price*\*730\*12 considering 730 hours per month ([[why 730 hours]])
- Committed cost for the term: this is the new price over the 12 months.    *Reduced cost per hour*\*730\*12
- Savings over the term: the difference between *OD cost for term* and *Committed cost for the term*
- Cost at time of purchase: how much do I pay when starting the commitment?
	- the full *Committed cost for the term* for all-upfront
	- 50% of the  *Committed cost for the term* for partial-upfront
	- nothing for nothing-upfront
- Cost each month: how much do I pay each month for the commitment
	- nothing for all upfront. All have been paid on day one
	- 50%/12 of the  *Committed cost for the term*  for partial-upfront
	-  *Committed cost for the term*/12 for nothing upfront

### Excel with the 12 and 36 months examples
![[Commitment scenario 1.xlsx]]

# Related Notes
- [[Reserved Instances]] an AWS commitment that works in the same way
- [[Savings plans]] an AWS commitment that works in the same way
- [[amortisation]] A way to account for commitment usage without having big spikes in your graphs. 

## Thank you
- Baps Hirani
- Ashley Hromatko
- Matt Shover
- Mike Fuller
- Stephen Old