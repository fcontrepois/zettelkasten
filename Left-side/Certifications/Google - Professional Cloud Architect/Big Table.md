---
publish: true
tags: googlecloud, certification
---

# Big Table
- [Main page](https://cloud.google.com/bigtable)
- A fully managed, scalable NoSQL database service for large analytical and operational workloads with up to 99.999% availability.


# Tech thinks to remember
- Wide column database
- Multidimensional Sparse Array
- Scales linearly
- Read/Write is atomic at row level
- Hbase API (Hadoop)
- Consistency
	- eventually consistent
	- but you can use read-your-write consistency
	- strong consistency 
- Row key is like primary table but BigTable does not support join
	- the row key value determine where the data is written
- Columns families
	- set of related columns in a table
	- product/name/size
- 1000 tables per instance
- Better to keep all data in one table
- Empty cell consume no space

## Recommendations 
- # of column family < 200
- Keep all value in a row below 100MB
- Keep cell values under 10MB
- Keep row key below 4k

## Limits
- Single value < 100MB
- A row < 256MB

## Concepts about data
- Metadata is saved on a node and data is saved in the Colossus file system

## Use cases
- Petabyte scale
- Low latency writes
- Key-based reads
- Analytic and ML
- Time series applications