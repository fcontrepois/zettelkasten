---
publish: true
tags: googlecloud, certification
---

# Cloud Spanner
- [Main page](https://cloud.google.com/spanner)


# Tech thinks to remember
- Globally distributed, so no specific region
- SQL database
- Fully managed
	- no downtime
	- automatic replication
- **ACID** in a global DB. That's really cool!
- For when [[Cloud SQL]] is not enough
- Point in Time Recovery
	- min 1h and max 7 days
	- you can query the database at a specific PIT
## Limitations
- No triggers but functions, and no a lot of advanced DB stuff
- 100 databases per instance
- 2TB per node
- 5000 tables
- 1024 columns per database
- 10MB maximum data per column value
- 32 indexes per table
- 10,000 indexes per database