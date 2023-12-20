---
tags: level100, cur finops, curfield
publish: true
---

# product/region

This field is important as all AWS pricing information is region specific. This field is computer-friendly and uses [[AWS region code]]- e.g. eu-west-3. For a human readable version of this field use [[product_location]].

## Source
- Category: [[Product details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/product-columns.html#product-details-R)

## Relevant notes
- Use this column to filter AWS usage by AWS region. For more info read [[Regions and availability zones]]
-  If you need easy to read info use [[product_location]]

## Notes
This field is important as all AWS pricing information is region specific. So any resource can potentially, and often has, a different price for each region.