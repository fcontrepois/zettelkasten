---
publish: true
tags: googlecloud, certification
---

# Google Kubernetes Engine (GKE)

- [Main page](https://cloud.google.com/kubernetes-engine/)

# Tech thinks to remember
## K8s
[Tutorial](https://kubernetes.io/docs/tutorials/kubernetes-basics/)
- Orchestrator of containers
- Allows load balancing of workloads
- Manages pool of nodes (VM in GCP)
- Automatic scaling updating and auto healing
- Nodes contain Pods which contains services
- **nodes** are VM (kind of)
	- Contains Kubelet, Kube-proxy, container runtime
- **node pools** are a group of nodes with the same config
- _**A Pod** is a group of one or more application containers (such as Docker) and includes shared storage (volumes), IP address and information about how to run them._
	- pods run on nodes
	- pods are ephemeral
	- pods are the atomic unit on the Kubernetes platform. i.e. they do not heal, they get replaced
- services are what is accessed by the end-user
- **labels** are key value pairs attached to objects

![GKE provisions, maintains, and operates everything in the zonal control plane and only provisions the nodes.](https://cloud.google.com/kubernetes-engine/images/cluster-architecture.svg)
- Labels are metadata to add some human context to the pod
	- Node Selector and Affinity can allow for the scheduling of pods on certain nodes based on labels
- **Deployments** run stateless pods and are defined with a manifest
	- ReplicaSets is how are pods replicated - and defines: number; template; selector. ReplicaSets are managed by Deployments.
		- It creates and delete pods to maintain the desired state
- **StatefulSets** run Stateful pods
	- stateful pods are not fungible
	- each pod has a persistent id that is unique to the pod
	- use cases:
		- Stable, unique network identifiers
		- Stable persistent storage (DB)
		- Ordered deployment and scaling
		- Ordered automated rolling updates
- **DaemonSet** ensure that each node runs a copy of a pod
	- use cases:
		- log agent
		- cluster agent
		- any agent really
### Storage
- we can use managed storage. Cloud storage that does not run on the nodes/pods
- on-disk in container is another option. It is simple but ephemeral (i.e. the data is lost when the container stops)
- K8s volumes. Available to all containers in a pod. It is specified in the pod specification. Can also be ephemeral, but at the pod level.
- CSI (Container Storage Interface) connects K8s to storage systems and Google provides the driver for [[Google Cloud Compute Engine]] disks
- ConfigMap (plain-text) and Secrets (encrypted-data) avoid hard-coded configuration info. This looks very much like how environment variable are usually used
	- Secrets can be mounted as volumes or env variables


### Network
- ![[K8s networking concepts.png]]
- Declarative - all is virtual and at the K8s
- SDN
- Different types of IP addresses
	- ClusterIP - attached to a service and is live during the service lifecycle
	- Pod IP -  last for the duration of the pod's life
		- /24 but default limit is 110 pods per node
		- 32 pods per node in autopilot
	- Node IP - for the nodes, access the kublet, at the VM level
	- Service IP - assigned by VPC. Also known as Cluster IP
	- Types of services
		- CluterIP: internal clients to send requests to stable internal ip address
		- NodePort:  a client sends a request to a NodeIp and the port defines the service
		- LoadBalancer: Ip adress of a load balancer
		- ExternalName: internal client DNS name
				- Headless: for pod groups not needing an ip address
	- Services have a stable ip address
	- Pod do not expose external ip by default
	- Pods and containers inside a cluster can communicate
	- Clients outside of the cluster cannot access the cluster by ClusterIP you need ot use LoadBalancers
	- Load Balancer: distribute traffic inside a cluster
		- Services can use:
			- External LB -> created by GKE for external connection to a service
			- Internal LB -> for in-cluster traffic to a service
			- HTTP(S) LB -> use K8s ingress resource
				- mapping url and hostnames to services in the cluster
				- Service is configured to use both the ClusterIP and NodePort
	- Network policies to limit access between pods
		- based on labels, ip ranges, port number
		- policies create pod-level firewall rules
	- Restrict access from external load balancers by setting loadBalancerSourceRanges in service
	- To restrict https LB we can use Cloud Armor security policy
 
## GKE modes
### Standard - more control
- Pay per used resources
- User configures the resources
- User configures autoscaling
- Regional or zonal

### Autopilot - less work to do
- Google manages nodes and pools
	- what type of machine to use
	- how many machines to use
- Provision based on pod specification
- Pay per pod, only resources used
- Built-in security
- Regional


## Cloud Operations for GKE
- Provides integration with  [[Cloud Logging]] and [[Cloud Monitoring]]
- Provides dashboard special for K8s
	- Slice and dice K8s aware
- can be disabled
- Allows for application logs
- Integrates with Prometheus, a K8s monitoring tool

## K8s health checks
- Readiness probes -> when an app is ready to serve traffic
- Liveliness probes -> indicates if an app is live

## Logging
- GKE is integrated with  [[Cloud Logging]] and [[Cloud Monitoring]]
- Uses an agent -> log router -> Cloud Logging or other logging sinks (e.g. [[BigQuery]], [[Cloud Storage]], [[Cloud Pub_Sub]])
	- 30 days keep
- If disable, K8s write logs to the worker node, but not centralised
- (optional) Also collects application logs (STDOUT/STDERR) 
