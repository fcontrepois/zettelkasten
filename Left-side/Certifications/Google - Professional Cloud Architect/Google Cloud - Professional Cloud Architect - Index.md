---
publish: true
tags: googlecloud, certification, index
---

# Official certification doc
- [Professional Cloud Architect official page](https://cloud.google.com/certification/cloud-architect)
- [Cloud Architecture Center](https://cloud.google.com/architecture/)

## Scenarios
- [EHR Healthcare](https://services.google.com/fh/files/blogs/master_case_study_ehr_healthcare.pdf)
-   [Helicopter Racing League](https://services.google.com/fh/files/blogs/master_case_study_helicopter_racing_league.pdf)
-   [Mountkirk Games](https://services.google.com/fh/files/blogs/master_case_study_mountkirk_games.pdf)
-   [TerramEarth](https://services.google.com/fh/files/blogs/master_case_study_terramearth.pdf)

# Other info
- I use the course _Google Cloud Professional Architect: Get Certified 2021_ on Udemy by [Dan Sullivan](https://udemy.com/user/dan-sullivan-3/)
- I also use the [The Google Cloud Developer's Visual Notes](https://github.com/priyankavergadia/GCPSketchnote)

# Products to know
- [Cloud resource hierarchy](https://cloud.google.com/resource-manager/docs/cloud-platform-resource-hierarchy)

## Security
- [[Identity and Access Management]]
- [[Web Security Scanner]]

## Service communication
-  [[Cloud Pub_Sub]] - queue

## Running services
- [[Google Cloud Compute Engine]] - VMs
- [[Google Kubernetes Engine]]
- [[Istio]]
-  [[Anthos]]
- [[Anthos#Cloud Run|Cloud Run]]
- [[App Engine]]
- [[Cloud Functions]]

## Storage
![[options to move data in google cloud.png]]
- [[Cloud Storage]]
- [[Cloud Memorystore]]

## Monitoring and sysadmin
- Google Operations Suite (formerly Stackdriver)
- [[Deployment manager]]
- [[Cloud Shell]]
- [[Transfer Appliance]]
- [[Cloud Logging]] for events
- [[Cloud Monitoring]] for timeseries data. 

### The four golden signals of monitoring
1. Latency - time to complete a request. Differentiate between latency for successful calls and failed calls.
2. Traffic - demand on a system. 
3. Errors - rates of errors. Differentiate between failed response and wrong response
4. Saturation - measure of the capacity in use. Usually you focus on the most contested resources. For example, CPU, disk, memory. 

## Network
- [[Network and VPC]]

## Data pipeline
- A nice blog post to differenciate the different products: [Dataproc vs. Dataflow vs. Dataprep: What is the difference?](https://wisdomplexus.com/blogs/dataproc-vs-dataflow-vs-dataprep/)
- [[Cloud Dataflow]] - Robust Batch with a graph. Can work at row level
- [[Cloud Data Fusion]] - GUI based ETL. No code and simpler.
- [[Cloud Dataproc]] - Spark Hadoop
- [[Dataprep by Trifacta]] - explore new dataset
- [[Vertex AI]] - ML/AI tools
- [[Datastudio]]

## Databases
- [[Cloud SQL]] - relational
- [[Cloud Spanner]] 30TB+ SQL
- [[Big Table]] - wide column
- [[Cloud Firestore]] - document
- [[BigQuery]] - analytics
- [[Cloud Datastore]]

## Orchestration
- [[Cloud Composer]] - Apache Airflow using DAGs in Python
- [[Cloud Workflows]] 
- [Spinnaker](https://spinnaker.io/docs/concepts/)
- [[Cloud Tasks]]

## Security
- [[Data Loss Prevention 1]] 
- [[Firewall]]
- Data at rest is always encrypted
- Data in transit inside the Google network is authenticated (using ALTS) but not encrypted. Data going on the Internet is encrypted.
- Encryption keys
![[Encryption keys options in Google Cloud.png]]
- VPC service controls manage the flow between perimeters, and are context aware. For example, limiting the transit of data outside of a safe zone ignoring the identity (user) permissions.
	- on-prem can be a perimeter