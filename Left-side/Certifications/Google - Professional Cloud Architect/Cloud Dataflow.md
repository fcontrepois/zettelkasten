---
publish: true
tags: googlecloud, certification
---

# Cloud Dataflow
- [Main page](https://cloud.google.com/dataflow)

# Tech thinks to remember
- Dataflow allows for "Exactly once delivery"
- managed service
- based on [Apache Beam Runner](https://beam.apache.org/get-started/beam-overview/)
- Stream processing
- SQL, Python, Java
- Comes with a lot of template to move data
- Concepts of jobs that are executions of particular Dataflow program
	- Dataflow shows graphs of execution

## use cases
- ETL
- Complex processing otherwise use [[Cloud Data Fusion]] for ETL or  [[Cloud Pub_Sub]] for messaging
- At row level