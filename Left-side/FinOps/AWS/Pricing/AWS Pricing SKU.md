---
publish: true
created: 2022-02-02
tags: finops, aws, pricing
updated: 2022-04-04
---

Update on 2022-04-03 after an investigation using Observable 
https://observablehq.com/d/e23249a4edfef640

## AWS Pricing SKU
### "Product Family"
- Identify sub-product in a product. For example Storage in EC2.

### SKU 
- A **sku** defines:
  -  a product in a region
  -  there are sub-sku for used and unused reservation connected with the main by **instancesku**
- Where applicable it includes generation and size.
  - for example a1.xlarge and a1.2xlarge are two different sku
  - there is an instancesku column in certain tables (RDS, EC2)
- Also included is additional engine used
- Also included is additional additional software

### Offercode 
- The offercode define commitment or no commitments and which commitment, both length and payment and standard/convertible.
- It is the same for shared, dedicated (metal), and host. 
  - JRTCKXETXF is the standard OD code and is standard across services
  - 6QCMYABX3D	1yr	All Upfront	standard
  - VJWZNREJX2	1yr	All Upfront	convertible
  - 4NA7Y494T4	1yr	No Upfront	standard
  - 7NE97W5U4E	1yr	No Upfront	convertible
  - CUZHX8X6JH	1yr	Partial Upfront	convertible
  - HU7G6KETJZ	1yr	Partial Upfront	standard
  - MZU6U2429S	3yr	All Upfront	convertible
  - NQ3QZPMQV9	3yr	All Upfront	standard
  - BPH4J8HBKS	3yr	No Upfront	standard
  - Z2E3P23VKM	3yr	No Upfront	convertible
  - 38NPMPTW36	3yr	Partial Upfront	standard
  - R5XV2EPZQZ	3yr	Partial Upfront	convertible
- There is one offercode for each type of RI (length and payment option)
  - The tiercode differenciate between upfront fee and RI applied
  - If there is no upfront fee, then only one tiercode (for RI applied) exist.

### Tiercode (not a real column)
- 6YS6EN2CT7 is for OD or when an RI is applied (but not the upfront payment). 
- 2TG2D8R56U is the tier code for Upfront fees.
- There are other codes different for each Product Family
  - 6YS6EN2CT7 is always the standard for any Product Family

### OD
- sku.JRTCKXETXF.6YS6EN2CT7

### RI no-upfront
- sku.not-JRTCKXETXF.6YS6EN2CT7 for RI applied.

### RI with upfront
Not-JRTCKXETXF as described above.
- sku.not-JRTCKXETXF.6YS6EN2CT7 for RI applied.
- sku.not-JRTCKXETXF.2TG2D8R56U for upfront payment.
