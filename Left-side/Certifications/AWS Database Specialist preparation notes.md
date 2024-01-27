---
created: 2024-01-23
updated: 2024-01-27
publish: true
---
This time all in one single big file. 

Disclaimer, these are my notes, so based on my understanding of things as of 2024-01-26. Things might be wrong or have changed since. 

# RDS
- 3 IOPS/GB general-purpose
- PIOPS up to 32000 IOPS
- Parameter group
	- specific to the DB engine
	- the default parameter group is read-only and cannot be changed
		- clone default, change the params, attach the cloned group
			- move status from InSync to Pending Reboot
		- static parameters need a MANUAL reboot to be activated
			- status moves from Pending Reboot to InSync
		- dynamic parameters are applied immediately
	- Option group are for optional features
		- default is empty
		- default is read only and need to be cloned to allow changes
- IAM DB authentication
	1. enable 
	2. create a user without a password
	3. attach IAM policy to the role
	4. Attach role to users or EC2 instances
- Password rotation
	- use Secret Manager and Lambda
- Encryption 
	- Pgsql rds.force_SSL=1 (static parameter, requires a manual reboot)
	- Aurora: create an unencrypted  snapshot and create an encrypted DB from it
- Snapshot copy into another account
	- manual snapshot -> share snapshot for cross-account, create SB on the other side
- Encrypt a non encrypted DB 
	- copy snap -> encrypt snap -> create encrypted instance from snap
- Allow writing on a read replica 
	- read_only = 0 
- RDS event subscription 
	- to get information on server events in CloudWatch

# Aurora architecture 
- Shared storage over multiple AZs. 
- 6 copies of the data are kept
- You can have a master and 15 read-replicas
- Connections are managed by endpoints.
	- write endpoint points to the master
	- read endpoint point to any reader
- It is possible to have a custom endpoint 
- Not all instances in a cluster have to be the same size
- Clone creates a new instance that connects to the same storage group and uses COW ( Copy on Write ) to allow the clone to be RW
- Aurora has a set of queries to simulate failures
- Backup is continuous to S3 every 5 minutes with a 35 days retention
- Aurora has automated scaling for replicas
- Aurora Serverless has no cloning capability
- 
# DynamoDB
- Mapping from a relational database:
	- Index -> Local Secondary Index 
	- View -> Global Secondary Index
- A table needs a partition key (aka primary key) and possibly a hash key
	- The primary key is mandatory, the hash key is optional
- Data is stored in JSON
- Capacity Unit: 
	- Read Capacity Unit
		- 1 CU = 1 request per second
		-  Reading 4KB 
		- Eventually consistent read = 1 CU
		- Strongly consistent read = 2 CU
		- Transactional read = 4 CU
	- Write Capacity Unit
		-  1 WCU = 1 KB
		- 1 table write = 1 WCU
		- 1 table transactional write = 2 WCU
- Data export to S3 (or in another account) can be done via EMR, Export, or Glue
- On-demand CUs are named Read Request Units
	- You can burst to the number of provisioned capacity not used in the last 5 minutes
- LSI use the same partition key and a different sort key
	- Maximum size is 10 GB
	- Cannot be deleted
	- Can only be created with the table
- GSI is like a view in the relational DB world, all is dynamic
	- only allows for eventually consistent reads
	- needs its own CU—it is treated as a separate table
- Storage
	- The unit is a partition of 10GB with 1000WCU and 3000RCU
	- The number of partitions depends on the size of the table or WCU or RCU
	- On a single table, CUs are divided equally between partitions
	- You cannot de-allocate partitions
	- This feels overly complicated for the end-user
- Streams are an ordered log of table activities of the last 24 hours.
	- can be sent for analysis
- Global tables 
	- multi-master, active-active, <1s replication lag, max 2 regions
- Application scaling can change the number of RCU and WCU 

# Redshift (Datawarehouse columnar)
- One leader node, and many compute nodes.
- A job gets partitioned in slices that run on compute nodes
- Node storage 
	- DC2 - Dense compute node
	- DS2 - Dense storage node
	- RA3 - managed storage, offload to S3 
- Redshift can access external data (Spectrum) accessing S3 via special nodes
- Redshift also can interrogate other databases RDS, Redshift, Aurora Pg, S3) using Federated Queries.
- WLM - Workload Manager 
- Cross region replication of snapshots is possible
# Elasticache
## Redis
- Caching strategies: lazy, write-through, both
	- Lazy: data returned from the DB is cached
	- Write-through: data written to the DB is cached (always fresh data)
	- Both: data is saved when returned and when written
-  Redis cluster mode disabled
	- Single shard
	- one primary node and up to 5 replicas 
	- replicas can in in another AZ
	- Single reader endpoint
- Redis cluster mode enabled
	- multiple shards 
	- the data is. distributed between shards
	- up to 90 nodes
	- minimum 3 shards.
	- a manual reboot doesn't trigger failover
	- There are no interruptions during maintenance
Redis Backup
- backups can be used to warm the cache
- Redis changing sizes:
	- reshard can be done online
	- resize of nodes, number of replicas, upgrades, all need a reboot
- Redis Global datastore
	- cross region replica
	- uses VPC peering
	- there is a primary region
	- secondary region (max 2) DR, no auto-failover
## Memcached 
- simple
- 20 nodes per cluster
- no replicas
- autodiscovery. every node has a list of all the other nodes
- vertical resize is done by deleting or creating nodes
- Horizontal resize is done standard up to 20 nodes per cluster
- no encryption
# DocumentDB (Mongo)
- Aurora style architecture
- Master plus up to 15 replicas
- Access via cluster endpoints and reader endpoint
- PITR 35 days
- auto backup retention for a max of 35 days
- not all replicas need to be of the same size
# Neptune (graph db)
- Aurora style architecture
- Two incompatible languages for loading and interrogation
	- Gremlin and SPARQL
- Workbench is very much a Junyper notebook
- Up to 8192 queries at the same time
- Support SPARQL federated query
- The Loader command loads data from S3
# Elasticseach/Opensearch
- ELK is made of three components
	- Elastiseach for search and indexing
	- Logstash as a log ingester
	- Kibana for dashboard
- can be used to make dynamoDB searchable (using streams and lambda)
	- same with CloudWatch + lambda 
	- or CloudWatch + Kinetic Data Firehose via subscription filter
- Up to 3 AZ.
	Dedicated masters are always in 3 AZ
# Timestream
- Serverless DB for time series data
# QLDB
- Blockchain
- Documents are saved in an AWS extension of JSON called ION
- There are three views to look at the data
	- user view that shows the current state of the ledger
		- interrogate using SQL-like language
	- committed view, like the user view but with additional metadata
		- use _QL_commited__<tablename> (something like that)
	- history view, with the history 
		- use history(<tablename>)
- The interrogation language is named PartiQL
- It is possible to check the digest in the console or directly on your computer
- No backup, but can export to S3
- There are streams that can be sent to Kinesis Data Stream

# Keyspaces (Cassandra)
- Migration from on-prem Cassandra: export to CSV -> import using Cqlsh COPY command
- Data retrieve 
	- Local_one (data from the first server)
	- Local_quorum (data is retrieved when it exists in at least 2 out of 3 servers)
# DMS and SCT
- Definition
	- SCT = Schema Conversion Tool
	- DMS = Database Migration Service
	- Playbooks = templates
- Process: Plan -> Assess -> Convert -> Migrate
- Better migrate only tables, primary key and other needed elements
	- avoid migrating FK, trigger, etc...
- SCT is optional if the source and destination databases are the same
- SCT 
	- runs locally on an EC2 instance
	- Does the SQL conversion
	- Converts ETL scripts 
	- Does an assessment report of what can or cannot, or need human
- WQF
	- Workload qualification framework ( part of SCT)
	- check OLTP 
- DMS tasks
	- do the migration
- DMS migration type
	- Full Load: move everything
	- CDC ( Change data copy) moves only the changed data
	- Full Load + CDC
- LOB
	- Full, will copy all the LOB, and is very slow
	- Limited, will copy all the LOB up to a size you define
		- If you know the max size of your LOB, better use limited with size = max size
- SCT extractors for Data warehouse
	- Original DWH -> SCT -> S3 -> Redshift
		- Schema migration
		- SCT extractor (to S3)
		- import in Redshift
- DMS validation
	- slows down the migrations but increases quality
	- better done in CDC process