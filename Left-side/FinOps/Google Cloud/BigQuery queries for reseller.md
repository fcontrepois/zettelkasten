---
created: 2022-12-09
updated: 2022-12-10
---

How to automate the collection of invoicing information for Google Cloud resellers using BigQuery.

Recently I started working with the Google Cloud equivalent of the AWS [[CUR - index]]. Luckily, Google exports the data directly into [[BigQuery]], so SQL is all I needed; that was my idea until it failed. Google uses a composite datatype (i.e. you can nest a hierarchy of data in one cell), reducing the number of columns, improving human readability, but complicating the queries to get data.

In [[Strategic Blue]], we do Google Cloud reselling, offloading billing and FinOps support questions from Google Cloud customers; in exchange, Google gives us a percentage of the revenue. So getting the numbers right, for the customers and us, is essential and is best done in an automated way. 

So here is my Google Cloud Reseller query that returns:
- the billing id of the customer. A unique identifier for each customer
- the months of the invoice
- the currency, as google does not always charge in US$
- the total cost, which can be seen as **usage**
- the customer discounts as all the credits applied to the customer usage
- the reseller discount that needs to be kept by the reseller
- the invoice value, which is the number to charge the customer 

note: 
- in the query, you need to change *customer-billing.allcustomerbillingdata.gcp_billing_export_v1_SOME_GCP_ID* with your schema and table. 


```sql
WITH reseller_credits as (SELECT
    billing_account_id,
    invoice.month as month,
    credits.type,
    SUM(IFNULL(credits.amount,0)) as value
FROM 
  `customer-billing.allcustomerbillingdata.gcp_billing_export_v1_SOME_GCP_ID`
  LEFT JOIN UNNEST(credits) AS credits
WHERE 
  1=1
  AND credits.type = "RESELLER_MARGIN"
 GROUP BY 1,2,3
),

with_reseller_discount_included AS (
  SELECT
  billing_account_id,
  invoice.month as month,
  currency,
  sum(cost) as total_cost,
  SUM(IFNULL((SELECT SUM(c.amount) FROM UNNEST(credits) c), 0)) as total_credits,
FROM 
  `customer-billing.allcustomerbillingdata.gcp_billing_export_v1_SOME_GCP_ID`
WHERE 
  1=1
GROUP BY billing_account_id, invoice.month, currency
ORDER BY 1
)

SELECT w.billing_account_id
  , w.month
  , w.currency
  , w.total_cost cost
  , w.total_credits - IFNULL(c.value,0) customer_discounts
  , IFNULL(c.value,0) as reseller_discount
  , w.total_cost + (w.total_credits - IFNULL(c.value,0)) AS invoice

FROM with_reseller_discount_included w
  LEFT JOIN reseller_credits c
    ON w.billing_account_id = c.billing_account_id 
    AND w.month = c.month
WHERE 
  1=1
  AND w.month =  '202210' -- this represent october 2022

```