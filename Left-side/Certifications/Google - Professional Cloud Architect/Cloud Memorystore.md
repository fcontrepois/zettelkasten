---
publish: true
tags: googlecloud, certification
---

# Cloud Memorystore
- [Main page](https://cloud.google.com/memorystore)


# Tech thinks to remember
- Managed Redis and Memcached 

## Redis
Connect from:
- [[App Engine]]
- [[Google Cloud Compute Engine]]
- [[Cloud Functions]]
- [[Anthos#Cloud Run|Cloud Run]]
- [[Google Kubernetes Engine]]

Max 300GB memory vs 5TB for Memcached

Redis Tiers:
- Basic tier: 
	- no replication
	- no cross-zone
	- no automatic failover
- Standard Tier
	- replication
	- cross zone
	- auto failover

## Memcached
Distributed in-memory key-value store

Great for one-to-one correlations:
- Reference data
- Database query cache
- Session caching

Cluster
- 20 nodes. Each with
- 1-32 vCPUs
- 1-256GB Memory 
	- max 5TB memory per instance

Connects from:
- [[Google Cloud Compute Engine]]
- [[Google Kubernetes Engine]]
- [[Cloud Functions]]
- [[App Engine]]
- NOT Cloud Run


