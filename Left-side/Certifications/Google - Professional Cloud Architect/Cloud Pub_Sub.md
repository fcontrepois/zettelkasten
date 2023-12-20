---
publish: true
tags: googlecloud, certification
---

# Cloud Pub/Sub
- [Main page](https://cloud.google.com/pubsub)
![[Google Pub Sub steps.png]]

# Tech thinks to remember
Message queue service. Great to decouple services. Allows for asynchronous configuration.

It does not allow for "exactly one delivery", for that use [[Cloud Dataflow]]

Each application requires a dedicated subscription to read from a topic. 

- **Topic** stores messages
- **Subscription** enable applications to read messages in a queue


You create a topic and will probably also want a subscription:
Standard subscription configuration:
- pull delivery
- 7 days retention
- expiration (of the subscription) after 31 days of inactivity
- 10 seconds to acknowledge
- immediate retry

[[Dataflow]] can be used to export the data in a topic into [[BigQuery]] or [[Cloud Storage]]