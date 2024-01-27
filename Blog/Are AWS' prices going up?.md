---
created: 2024-01-06
updated: 2024-01-07
publish: true
---
# Are AWS' prices going up?

At re:Invent 2023 someone said that over the years AWS had increased instance prices, like an m5 of five years ago was cheaper than an m5 today. 

As far as I have observed, AWS does NOT change the prices of instance generation but can change the price when a new generation is released. For example, the m7 is costlier than the m6 of the same size. 

Yet, if someone thinks that EC2 prices have changed for the same product, then it is worth investigating!

> Full article and code is on [Observable](https://observablehq.com/@fcontrepois/is-aws-pricing-going-up) 

# Introduction

I picked the prices of all EC2 instance types of size 2xlarge in us-east-1 on the first of December 2019, 2020, 2021, 2022 and 2023. 

This graph shows that all prices stayed the same from their inception to today, except for one. Read the conclusion to know which one. 

![[Are AWS prices going up.png]]

# Conclusion

Well, at least in us-east-1 and for the 2xlarge family the answer is NO! Only one instance type went down. The **Inf1**.

[zt - flip the coin](https://zt.frankcontrepois.com/Right-side/Zettel/zt+-+flip+the+coin). Flipping the coin. In the last five years, the price of servers' components has gone down, yet the AWS prices have not. In a fair market, I would expect prices to go down as hardware is amortised and replacements are cheaper. AWS (and all the others) are keeping tight control over the prices and so the buying decisions of their customers.

So AWS does not increase prices, but they do not reduce them as much as they could either.

