---
 tags: curcategory, finops, cur
---

[AWS Documentation](https://docs.aws.amazon.com/cur/latest/userguide/pricing-columns.html)

The pricing columns in AWS Cost and Usage Reports contain the prices for a line item. The pricing columns are based off of the AWS Price List Service API. 

AWS Price List Service API doesn't include:
- Free Tier pricing, 
- Spot Instances, 
- products in AWS Marketplace, 
- upfront annual subscription fees ([[lineItem_LineItemType#Fee]]), and monthly recurring fees ([[lineItem_LineItemType#RIFee]])