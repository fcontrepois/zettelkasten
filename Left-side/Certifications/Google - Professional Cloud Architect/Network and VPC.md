---
publish: true
tags: googlecloud, certification
---

# Network and VPC - Virtual Private Clouds
- [Main page](https://cloud.google.com/vpc)

# Tech thinks to remember
## VPC
- VPC subnet creation
	- Auto mode: Google creates subnets and choose the IPs. Not good for prod.
	- Custom mode: good for prod.

## Cloud VPN
Classic encrypted connection over the Internet. It is simple, standard, limited by your internet connection. 
- IPSEC
- Cloud VPN exists in two versions:
	- classic
	- ha.
- Cloud VPN Gateway is regional

## Shared VPC
- Connect resources from **multiple projects** to a common VPC network
- the common network is called the *host project*.
- we can share all subnets, including new ones. Or individual.

## VPC network peering
- Allows internal addresses between VPCs in different organisations
- Requires both sides to configure VPC peering
- A use case is: SaaS ecosystems in Google Cloud. You can make services available privately across different VPC networks within and across organizations.
- Max 25 VPC
- Benefits include:
	- lower latency
	- no transit thought Internet
	- no egress charges.

## Routing
Routes are managed with Cloud Router. Cloud Router is a BGP router.
	- Dynamic routing mode is to advertise routes -a BGP term- in the same region. 
	- Global dynamic routing for all the subnet in the VPC

## Network tiers
### Standard tier
- Goes through the internet for inter-region traffic
- Slow 
- Cheap
- Regional LB

### Premium tier
- High perf networking
- LB is global
- High reliability

## Load balancing
Selection criteria for load balancing:
- Global v regional
- External traffic vs internal traffic only
- TCP level or HTTPS
- Google network service tier (standard and premium). For example global is only available for premium service tier. 

### Global LB
- requires premium networking tier
- span across regions
- is always external
- exists in three version:
	- HTTP/HTTPS
	- TCP Proxy
	- SSL proxy for non-SSL traffic

### Regional LB
- in one single region
- exists in three version
	- Internal TCP/UDP
	- Internal HTTPS
	- External TCP/UDP
	
## VPC Flow Logs

##  Private Access (needs a review)
- Bring you IP addresses

## Private service connect
- Allows to use my own internal addresses to access Google Cloud services

##  Cloud NAT provides NAT without risk of single point of failure
- reduce use of external public ip
- Cloud Route is used underneath

## Cloud Armor
- DDOS protection
- Uses WAF 
- detects attacks at the load balancing level

## Cloud Interconnect
- Connects a private datacentre with Google Cloud
- Comes in two types:
	- dedicated. With a direct physical connection between your datacentre and Google
	- partner. Using a telecom partner that has connection with Google Cloud

### Direct peering 
This is another way to connect to Google, not Google Cloud specifically. It can be used to access Google Workspace. 
This is not the recommended way to connect to Google Cloud.

## Service directory
- DNS service that tracks changes of IP addresses. For example when using K8s

## Cloud CDN
- Content delivery network
- Distribution of content over the world
- Built on top of external HTTPS LB

## Network Endpoints Groups
- https://cloud.google.com/load-balancing/docs/negs/serverless-neg-concepts
- A network endpoint group (NEG) specifies a group of backend endpoints for a load balancer. A _serverless NEG_ is a backend that points to a [Cloud Run](https://cloud.google.com/run/docs), [App Engine](https://cloud.google.com/appengine/docs), or [Cloud Functions](https://cloud.google.com/functions/docs) service.
- Looks like AWS API Gateway to me (I may be wrong)