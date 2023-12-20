---
tags: level200, finops, aws
created: 2023-01-21
updated: 2023-01-23
---
 #cur #finops 
 
 # Amortisation

Disclaimer: this text needs improving. 

Amortisation has a friend, cashflow. And while both terms are financial, we are all familiar with them. Cashflow is when the money comes out of our wallet;  amortisation is the cost per unit (think pro-rata).

A hopefully fun illustrative image of amortisation.

Amortising is like spreading butter on a toast. You start by taking a big chunk of butter that covers only a little part of the bread and then you spread it over the full length of the bread. The quantity of butter is the same, but it is more useful over the length of the bread (and tastier, which is the important bit). 

*Note: this is an extreme simplification to help get the concept.*
The equivalent for finance is amortisation: you take a big payment done at the time of buying, and then you spread it over the course of the life of the stuff you bought, finding the yearly/monthly/daily cost of use. 

For example, if you buy a car for $30,000 and you are going to use it for ten years, then you can say that each year you use the car for $3,000. This is amortisation over ten years. 

Amortisation is great for apple-to-apple comparisons. Continuing with the car example, if you find a car costing $40,000 that can last 20 years, then, doing the amortisation calculation, this new car costs $2,000/year, a much better deal, yet a worst initial cashflow (money out of the pocket).

In the cloud amortisation makes it easy (ok, easier) to compare months with and without commitments.

# In the Cloud
*Applicable to Reserved Instances and Savings Plans, amortising is when you distribute one-time reservation costs across the billing period affected by that cost. For example, if you pay $365 for an All Upfront RI for one year and you have a matching instance that uses that RI, that instance costs you $1 a day, amortised.* - [AWS CUR query doc](https://dx1572sre29wk.cloudfront.net/cost/300_labs/300_cur_queries/query_help/)

# Explanation

If we take the scenario in this image, the "rent" for the commitment is *Cost each month*. In the CUR, AWS charges this cost on the first of the month creating spikes in cost. But those spikes do not connect with any increased usage or a change in the number of VM running, and the spike does not have real-life correspondence. 

There is another angle: the amount of money of the "rent" is, in real terms, really being consumed each hour. 

![[Commitment scenarios.png]]

So amortisation is about converting the spend from when it happens (money goes out of the wallet) to when it is used (each hour). 

- All-upfront commitments are spread over the entire term of the commitment.
- Partial-upfront commitments are split: the upfront payment is distributed over the entire commitment length, while the rest is distributed month by month. 
- No-upfront commitments are distributed each month 

# Graph example
## No amortisation
![[amorisation no-amorisation graph.png]]

The spikes on the first of each month are the "rent" for the [[commitments]]; AWS reports the rent payment on the first of the month (while in reality, you will pay for it next month when you get the invoice...) 

The rent is consumed as the month goes by, and the first of the month spike reduces.

If you have many full upfront [[commitments]], then there will be no spike, as there is no rent, but the benefit of the commitments will not be visible. [[to check]]

[[to improve]]


## with amortisation
![[amortisation graph.png]]

The graphs are flat, yet there are still some spikes, probably due to some other services charged monthly, like support or some marketplace products. 


## Together
![[amortisation and non-amortisation graph.png]]

You can see that on the first of the month, the spike is much lower for the amortised value, as the value is spread over the month. 