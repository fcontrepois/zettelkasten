---
publish: true
tags: googlecloud, certification
---

# BigQuery

- [Main page](https://cloud.google.com/bigquery/)
- Serverless datawarehouse


# Tech thinks to remember
- [BigQuery can import from S3](https://cloud.google.com/bigquery-transfer/docs/s3-transfer)
- Not relational but uses SQL
- OLAP
- BigQuery ML
- BI Engine (in memory storage)
- GIS for geographical data
- Omni to run BigQuery in AWS or Azure
- Uses columnar storage allowing to recover full columns
- Views are a thing and can be materialized
- Datasets are the entity that has tables and views
	- a dataset is connected with a single project
- You can access BigQuery from 
	- GUI
	- CLI
	- API
- Allows for federated access
	- from BigTable
	- Cloud SQL
	- Parquet
	- ORC
	- From drive: CVS, JSON, Avro, Sheets
- Security can be applied at project level, but also at the dataset level  and table/view
- Column level security is also possible
	- based on tags. Tags are in the Data Catalog
	- tags are assigned to column
- Partition
	- by daily ingestion time 
	- date/time partitioning
	- there is a require_partitioning_filter to force the use of partition
	- You can set expiration for partitions
- You can shard too. Which creates a new table every day
- Clustering is an ordered column, allowing for faster where filtering 
- Avro is preferred file format for upload
- BigQuery transfer service is used to connect and get data from SaaS providers
- You can create ML models in SQL directly in BigQuery

## BI Engine
- max 100GB and 10GB per table
- 

## Permissions
### Existing roles
- BigQuery Admin
- BigQuery Data Owner/Editor/Viewer
- BigQuery Resource Owner/Editor/Viewer
- BigQuery User
	- can create dataset and is granted the data owner on that dataset when created
- BigQuery Job User