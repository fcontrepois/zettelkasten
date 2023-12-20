---
publish: true
tags: googlecloud, certification
---

# Cloud Composer
- [Main page](https://cloud.google.com/composer)

# Tech thinks to remember
- Based on Apache Airflow
- Managed services
- Pipeline orchestration for complex interactions
- using Directed Acyclic Graphs (DAGs)
	- collection of tasks with dependencies
	- python scripts
- Blocks:
	- Tasks
	- Operators - define how task with run
		- action to execute a software
		- transfer to move data
		- sensor
	- Hooks - to connect to 3rd party services
	- Plugins - combination of hook and operator

- Deployed using various GCP services and K8S [link](https://cloud.google.com/composer/docs/composer-2/environment-architecture)
![Diagram](https://cloud.google.com/composer/docs/images/composer-2-private-ip-architecture.svg)

- Division in a customer project and a tenant project
	- customer project(s) is to run the *real stuff*
		- [[Cloud Storage]]
		- [[Google Kubernetes Engine]]
		- Redis
	- tenant project is for admin tasks
		- [[Cloud SQL]]
		- [[App Engine]] Flex

## Use case
- For large ETL projects