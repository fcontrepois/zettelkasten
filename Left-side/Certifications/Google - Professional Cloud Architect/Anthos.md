---
publish: true
tags: googlecloud, certification
---

# Anthos
- [Main page](https://cloud.google.com/anthos)


# Tech thinks to remember
Anthos is another layer of abstraction on top of [[Google Kubernetes Engine]] extending it over multi-cloud and hybrid environment. 

Uses a declarative model. I define what I want and the system makes it happen. 

Allows 
- Use cases: Multi-cloud and hybrid
- Multi-cluster (fleet)
	- Service management
	- Infrastructure management

Benefits:
- Centralised management of config as code
- Ability to rollback deployment with Git
- Single pane of glass
- Workflows, centralised
- Anthos Service Mesh provides some additional security features

## Multi Cluster Ingress
Use cases: single IP for multi-cluster applications, high-availability, proximity routing

- Multi Cluster Ingress Controller: global control pane, hosted by Google
- Config Cluster: a GKE 
- Fleet
- Member Cluster

### Service Mesh
- Controls how parts of application work together
- Can provide some additional services, like logging or security
- Based on Istio (Open-source)
- Can be used to provide performance metrics

### Cloud Run for Anthos
- Connect to [[Cloud Run]]
- If your organization wants to leverage Kubernetes to modernize and optimize its existing resources, the combination of Anthos and Cloud Run for Anthos can help smooth that transition, so you can modernize in place. With Cloud Run for Anthos, developers can more easily write serverless applications and deploy them to the Anthos cluster without having to learn Kubernetes concepts first. Cloud Run for Anthos takes care of scaling your application instances up or down, even down to zero depending on traffic.