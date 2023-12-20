---
publish: true
tags: cur, finops, level100
---

# Questions you can ask a CUR file
[[to complete]]

I will use a meta-SQL as there are different file format (CSV, Parquet, Redshift) format; and the table schema also changes every month. 

- The FROM line is omitted as would always be the same and not bring any real value.
- For most questions, you can group, filter and aggregate by date, either by
	- [[bill_BillingPeriodStartDate]] to get monthly information matching an invoice
	- day([[lineItem_UsageStartDate]]) to get daily information
	- [[lineItem_UsageStartDate]] and [[lineItem_UsageEndDate]] to get hourly information
	- Have a look at the good [aws documentation](https://dx1572sre29wk.cloudfront.net/cost/300_labs/300_cur_queries/query_help/#filtering-by-date) on filtering by date.
- Sentence in *italic* are to be adapted to match your needs

# How much 
## How much is my bill for a certain month?
SELECT SUM([[lineItem_UnblendedCost]])
WHERE [[bill_BillingPeriodStartDate]] = *first day of the month you are interested in*

## How much did I spent on a certain day?
SELECT SUM([[lineItem_UnblendedCost]])
WHERE day([[lineItem_UsageStartDate]] = *day you are interested in*

## How much is my amortized cost? 
- To understand what amortization is check [[amortisation]]


## How much did I use at OD rates?

## How much did I spent per day on average?

## How much did I spent per day on average?

## How much did I spend on marketplace?

# How many
## masters do I have?
SELECT DISTINCT([[lineItem_UsageAccountId]])
## account do I have?
SELECT DISTINCT([[lineItem_UsageAccountId]])
## regions do I use?
SELECT DISTINT([[]])
## az do I use?
SELECT DISTINCT([[lineItem_AvailabilityZone]])

# What are
## the pricing unit per AWS service?
- Source [CUR query help](https://dx1572sre29wk.cloudfront.net/cost/300_labs/300_cur_queries/query_help/)

Create a query to extract
- [[product_ProductName]]
- [[product_ProductFamily]]
- [[lineItem_Operation]]
- [[pricing_unit]]