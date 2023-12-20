# lineItem/AvailabilityZone

#level100 #cur #finops #curfield

Availability zone (AZ) identify the sub-location (sub-region) in which the instance of system is running 

Availability zones are defined with the name of the main region followed by a letter. 
- a for the first availability zone
- b for the second one
- and so on

For example, `us-east-1a` or `us-east-1b` as AZ of the us-east-1 region.

## Source
- Category: [[Line item details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/Lineitem-columns.html)

## Relevant notes

## Notes
In each AWS region is really a network of different datacentres tightly connected together. Each individual datacentre is an Availability Zone. 

For [[300 - disaster recovery]] purposes, each availability zone should be able to survive a catastrophic event without impacting the other availability zone in the same region.

So if you save some data in the London region, for backup and fault-tolerance, that data will be saved into an availability zone of the London region and replicated in at least another availability zone of the London region. 
