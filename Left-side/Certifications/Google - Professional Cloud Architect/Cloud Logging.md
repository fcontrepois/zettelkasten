---
publish: true
tags: googlecloud, certification
---

# Cloud Logging

- [Main page](https://cloud.google.com/logging/)


# Tech thinks to remember
- Connects with [[Google Kubernetes Engine#Cloud Operations for GKE]]
- Central repository for logs
-  Use a FluentD agent, but specific to Google
-  retention is 30 days
-  logs can be streamed to [[Cloud Pub_Sub]] and [[BigQuery]]
-  *Log viewer* build queries to search in the logs
-  *Metrics editor* search metrics per application
-  *Log router* to route logs to specific log sink. Like [[BigQuery]], [[Cloud Storage]], [[Cloud Pub_Sub]] and other destinations