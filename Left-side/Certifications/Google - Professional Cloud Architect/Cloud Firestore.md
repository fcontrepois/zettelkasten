---
publish: true
tags: googlecloud, certification
---

# Cloud Firestore
- [Main page](https://cloud.google.com/firestore)


# Tech thinks to remember
- Document database
	- aka a managed NoSQL database
	- Key-values pairs
	- hierarchical

## Use cases
- Semi-structured data
	- schema is not fixed
	- May change over time
	- Different attributes across entities
- Not good for load volumes of streaming data

## Concepts
- Entities are something, like a row in a relational db (RDBMS)
- A set of entities is, kind of, like a table in a RDBMS
- Entities have properties, like the columns in a RDBMS
- Related entities are known as Kinds, kind of like a table
- Entity group is an entity and all its descendants
- Use Graph Query Language (GQL). 
	- A query is made of:
		- Entity kind
		- 0-N filters
		- 0-N sort orders
- 270 seconds timeout
- 60 second idle expiration
- Max of 500 entities modified by a single transaction

## Important
- Indexes are required for all queries
- No scanning
- There are some automatic indexes
	- atomic values
	- array values
	- not the others like composite, made of many fields  
- != (or <> in SQL ) does not exist, be explicit with < and > 
- OR queries have limitations
- Serializable isolation -> like if the DB makes a snapshot of all the data before running the query. New writes are not readable (they did not exist at the time of starting the query)

## Modes
### Datastore mode
- backend for server app
- no sync with mobile device

### Native mode
- For mobile and web app
- Can manage a lot of connections
- there are mobile and web clients