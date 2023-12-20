---
publish: true
tags: googlecloud, certification
---

# Identity and Access Management
- [Main page](https://cloud.google.com/)

# Tech thinks to remember

## seven types of identity
1. Google account - a person
2. Service account - a service. Email is generated
	- Applied only to a resource
	- This counts as both a principal and a resource
3. Google group - collection of identities
4. Google Workspace domain -  for access to G-suite
5. Google Identity domain
6. All Authenticated users
7. All Users

## Other concepts
**Resources** are things that we can do action upon
**Permissions** are what an account is authorized to do on a resource
**Role** are collection of permission assigned to an identity
**Policy** or IAM policy are attached to resources and defined by bindings. 
**Bindings** are members and roles

## Primitive roles (deprecated)
- Viewer
- Editor
- Owner

## Predefined and Custom Roles
There are more than 800 roles pre-defined by Google, with all the permissions pre-configured. It is easy to copy and extend (or reduce) a role.

## Cloud IAM conditions
You can add conditions, like time of the day, to **resources** to fine-tune access and security. 

IAM conditions work on:
- [[Big Table]]
- Cloud Key Management Service
- [[Google Cloud Compute Engine]]
- Identity-Aware Proxy
- Resource Manager
- Secret Manager

## Identity Aware Proxy (IAP)
Provided an application authorization layer for HTTPS applications. IAP eliminates the need for network access controls. 
IAP protects resources that can then only be accessed thought the proxy. 
![[Identity Aware Proxy flow 1.png]]
![[Identity Aware Proxy flow 2.png]]

## Workload Identity Federation
Grant external identities to access an IAM role.

- Used short lived access keys.
- Workload identity pools are a collection of related identities.
- Workload identity provider is the connector with an external identity provider.
	- AWS
	- Azure Active Directory
	- Okta
	- Kubernetes clusters
	- on-prem Active Directory

## Best practices
- Use predefined role first and expand them if needed.
- Use group to assign role to multiple users identity
- Use service accounts for applications and servers
- **Do not** add service accounts to groups
- Define a resource hierarchy
	- use policies to control access
	- leverage the hierarchy to benefit from inheritance
- Auditing
	- use the logs from Cloud Audit logs to check changes in IAM policies
	- export audit logs to [[Cloud Storage]]. The default expiry date for logs is 30 days otherwise.