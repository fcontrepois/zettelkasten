---
publish: true
tags: googlecloud, certification
---

# Cloud SQL
- [Main page](https://cloud.google.com/)


# Tech thinks to remember
- SQL is used 
	- DDL - data definition language to build stuff
	- DML - data manipulation language to ask for stuff
- ACID
- Regional datastore
- Max 30TB per database
	- for more you should use [[Cloud Spanner]]
- Backup, size , connections, maintenance window can be defined at creation
	- Flags allow for granular configuration
	- Insights to get realtime optimization
- Cloud SQL is regional
- Read Replica helps to reduce latency & improve performance. 
- Failover Replica is used for High Availability.

## engines
- PostgreSQL
- MySQL
- SQL Server

## Cloud SQL Auth Proxy
To connect to a Cloud SQL from the outside.

- The proxy client runs where the application runs
- The proxy server runs near the instance
- To use proxy, set the ip address to public (which sounds counter-intuitive to me)