---
publish: true
tags: googlecloud, certification
---

# Cloud Storage

- [Main page](https://cloud.google.com/storage/)
- Object storage for unstructured data, archive data, temporary storage, internet accessible
- Globlal nam


# Tech thinks to remember

## hierarchy
- Global namespace (all names are unique in all of GCP)
- Buckets - top level units

## Storage clases
- Standard - for high perf
- Nearline - at least 30 days
- Coldline - at least 90 days
- Archive - at least 365 days

## Data distribution
- Regional
	- in a region but in multiple zones
- Dual-region
	- auto-failover
- Multi-region

## Object Lifecycle Management
- to change storage class
	- only going down
- delete objects older than a certain period
- or keep objects for a minimum of time
	- object holds to remove the ability to delete an object
- all is encrypted
	- google
	- customer managed but google's keys
	- customer managed and customer's keys
- DELETE for versioning
	- deleting live version -> creates a non-current version. The storage is still consumed
	- deleting the non-current version -> deletes the object

## Security and Access
- ACL
	- Fine grained but obsolete
- IAM 
	- Uniform bucket level access 
- Signed UR
	- time limited
	- generate url
	- access without IAM authorization
- Signed Policy Documents
	- specify what can be uploaded to a bucket
- You can upload you own encryption key 
	- Supply the encryption key in a .boto configuration file. Use gsutil to upload the files.

## How to upload data
- Console; Command line (gsutils); API
- Cloud Storage Transfer
	- To move from on-prem or other cloud providers 
- Transfer Appliance
	- shipped
	- 40TB or 300TB

![[Google transfer method for large datasets.png]]

## Error codes
- [Status code](https://cloud.google.com/storage/docs/json_api/v1/status-codes)
- 401 Unauthorized
- 403 Forbidden
- 404 Not Found
- 409 Conflict
- Others are listed on the page

## Storage classes
From https://cloud.google.com/storage/docs/storage-classes as of 2021-12-02

| Storage Class    | Name for APIs and gsutil | [Minimum storage duration](https://cloud.google.com/storage/pricing#archival-pricing) | Typical monthly availability<sup>1</sup>                             |
| ---------------- | ------------------------ | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| Standard Storage | `STANDARD`               | None                                                                                  | *   \>99.99% in multi-regions and dual-regions
*   99.99% in regions |
| Nearline Storage | `NEARLINE`               | 30 days                                                                               | *   99.95% in multi-regions and dual-regions
*   99.9% in regions    |
| Coldline Storage | `COLDLINE`               | 90 days                                                                               | *   99.95% in multi-regions and dual-regions
*   99.9% in regions    |
| Archive Storage  | `ARCHIVE`                | 365 days                                                                              | *   99.95% in multi-regions and dual-regions
*   99.9% in regions    |