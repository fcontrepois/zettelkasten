---
publish: true
created: 2022-02-02
tags: finops, aws, pricing
updated: 2022-04-03
---
Update on 2022-04-02 after an investigation using Observable 
https://observablehq.com/d/e23249a4edfef640

**THIS IS WORK IN PROGRESS AND DOES NOT TAKE INTO ACCOUNT THE LATEST ON [[AWS Pricing SKU]]**

So the columns that are all the same are probably defined by either  offerterm or by tier, and the columns that are different should be based on sku. 

## What is the Primary key (current hypotesis)
- effectivedate
- ratecode

## Possibly driven by primary key
- pricedescription

## Still unknown
- operation
- Product Family -  could be the field used to identify subset of products. Like compute, storage, under Ec2. 

## Possibly driven by offerterm + termtype
It seems possible that offerterm really starts being useful when there are commitments and that for services without them some columns simply do not exist. There is also the possibility that offerterm requries termtype to make something useful
- currency
- servicecode
- servicename
- leasecontractlength
- purchaseoption
- offeringclass
- priceperunit

## Possibly driven by tier
- startingrance
- endinrange
- unit
- pricedescription (some, like all upfront)

## Driven by sku
-  usagetype
-  location
-  locationtype
-  _product specific columns_
-  regioncode (not always available)