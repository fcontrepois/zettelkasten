---
tags: level300, finops, aws
created: 2022-07-12
updated: 2022-07-13
---
 #cur #finops 
 
To anonymise a cur file every field that contains, or can possibly contain, data that can identify a customer, needs to be either removed or changed.

The aim is that no-one (including AWS people) having access to the cur file can connect it to one specific company. The only way to connect the anonymised cur with a customers is to map the spend with the invoices sent by AWS which would require access to the financial information of many AWS customers. I hope this is very protected.

#curtoanonymise 
# Current list of field to anonymise or remove
- [[bill_InvoiceId]]
	- can be any string. I recommend to use *final* for [[finalised cur]] files, and to leave the field empty for non [[finalised cur]]
- [[bill_PayerAccountId]]
	- for each payer account id in the cur file generate a id made of 12 random numbers.
- [[lineItem_ResourceId]]
	- for each resource id generate a uuid
- [[lineItem_UsageAccountId]]
	- for each payer account id in the cur file generate a id made of 12 random numbers.
- [[savingsPlan_SavingsPlanArn]]
	- the Arn contains the account
- [[reservation_ReservationARN]]
- [[reservation_SubscriptionId]]
- [[resourceTags_user-anything]] <- remove all tags columns by default
	- changing with some randomized data could be done too