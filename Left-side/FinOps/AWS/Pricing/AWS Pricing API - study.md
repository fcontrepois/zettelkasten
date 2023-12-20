---
publish: true
created: 2021-11-20
tags: finops, aws, pricing
updated: 2022-04-19
---

### If you are looking for code - Bash one-liner to get all the AWS price lists.

#### JSON
```bash
wget -q -O - https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/index.json  | jq -r '.offers[].currentVersionUrl'  | wget -x  --base="https://pricing.us-east-1.amazonaws.com" --no-host-directories --cut-dirs=3 -i -
```

#### CSV
```bash
wget -q -O - https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/index.json  | jq -r '.offers[].currentVersionUrl' | sed 's/\.json$/.csv/' | wget -x  --base="https://pricing.us-east-1.amazonaws.com" --no-host-directories --cut-dirs=3 -i -
```

AWS files come with 5 lines that are useless. Use the following sed command to get rid of those lines. 
```bash
sed -i '1,5d' <filename>
```

[[AWS Pricing API - codebuild|Automate the download of all pricind data in S3 with Codebuild]] 

# AWS pricing - getting to know it

As often, when reading the [AWS documentation on pricing](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/price-changes.html), I got slightly  confused.

## Caveat 
The [original announcement](https://aws.amazon.com/blogs/aws/new-aws-price-list-api/) of the Pricing API is from 2015 it include some caveats: 
> *It is available for all public AWS regions except China (Beijing). Information is not provided for Free Tier pricing, Spot Instances, or for products in the [AWS Marketplace](https://aws.amazon.com/marketplace/).*

The limitations are very much aligned with what is also in the [[CUR - index|CUR]] file where not all billing information is  available. For example in [[pricing_publicOnDemandRate]] or [[pricing_publicOnDemandCost]].

# Index
- Billing data can be accessed via API, and there are two API
	- Price List Service API (AKA the Query API) to get all the details programmatically. This seems to be a good option for lazy-calls when the information is called on-the-fly during the execution of a program. Best accessed via an SDK.
	- AWS Price List API (AKA the Bulk API) to get big files with all the pricing information. This is probably the best option for ETL and saving all AWS pricing details into a database.

Both API provide the same type of data, but differently. The Query API requires more calls, but each call returns a small amount of data. The Bulk API requiries few calls, but each returns megabytes of data.

# Price List Service API (Query API)
What you want is pricing data, and that is provided by [GetProducts](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetProducts.html). To get a manageable amount of data back from,  [GetProducts](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetProducts.html)  it is best to have a filter. The filter can be constructed with a combination of results from [DescribeServices](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_DescribeServices.html) and [GetAttributeValues](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetAttributeValues.html)  The official documentation shows a filter that includes both a service and an attribute:
```
"Filters": [
	{
		"Type": "TERM_MATCH",
		"Field": "ServiceCode",
		"Value": "AmazonEC2"
	},
	{
		"Type": "TERM_MATCH",
		"Field": "volumeType",
		"Value": "Provisioned IOPS"
    }
],
```

There are two endpoint to query the API
-   https://api.pricing.us-east-1.amazonaws.com
-   https://api.pricing.ap-south-1.amazonaws.com

Used to get pricing programmatically, at SKU level, to get information about 
- services 
	- Get the initial metadata of a service by calling [DescribeServices](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_DescribeServices.html) passing a ServiceCode (e.g. AmazonEC2). The call returns  an array of Service objects, each with a set of attributes specific to that service
	- Get the details for an attribute by calling [GetAttributeValues](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetAttributeValues.html). The list of attributes are [documented here](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/reading-an-offer.html#pps-defs)
- products and pricing information by calling [GetProducts](https://docs.aws.amazon.com/aws-cost-management/latest/APIReference/API_pricing_GetProducts.html). Return all the services that match the filter criteria. It is a search engine for products. This call return product metadata, and pricing data.

```warning 
The query API does not support Savings Plans prices.
```

```warning
I cannot find a way to ask for a pricing in the past.
```

# AWS Price List API (Bulk API)
The [AWS documentation](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/using-ppslong.html)


There is one endpoint to query the API
- https://pricing.us-east-1.amazonaws.com

This is when you ask for pricing in bulk (hence the name), one call can - and will - return a lot of data. So if you need all the prices for an AWS service (e.g. EC2) in all regions, or all the services prices for a specific region, this is the API to call. 

The API provides two types of data:
- **Offer index file**, used to filter (i.e. index) the offer files. I see them as a filter to allow a divide and conquer approach to getting pricing data in bulk 
- **Offer file** that contains the pricing information. It can be
	- For a specific service in all regions
	- For a specific region for all services

## Master index file 
The master index file connects all the offer files together. It is available at https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/index.json

The file 
- lists all the services available using the [[AWS service code]]
- for each service there are a set of URL containing filtered pricing data
	- **versionIndexUrl** pointing to another offer index file that contains past version of the pricing. This type of file allows to get access to past price points. 
	- **currentVersionUrl** pointing to the offer file with the latest version of the pricing for this service in all regions.
	- **currentRegionIndexUrl** pointing to another offer index file that contains a list of offer files for each regions the product is available in.
	-  **savingsPlanVersionIndexUrl** pointing to another offer index file that contains a list of offer files for savingsplan for this product. This field is not available for services not covered by savings plans.

## How to
### How to choose between JSON and CSV
The URL for both format are the same, only the ending (i.e. .csv or .json) is different:
- Offer files with an URL ending in *.json* are in json (incredible :) )
- Offer files with an URL ending in *.csv* are in CSV

### How to get the prices of a service in all regions
- JSON: https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonEC2/current/index.json
- CSV https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonEC2/current/index.csv

Change AmazonEC2 with another [[AWS service code]] to get the prices of another service.

### How to get the prices of a service in one region
https://pricing.us-east-1.amazonaws.com/offers/v1.0/aws/AmazonEC2/current/us-east-1/index.json

- Change AmazonEC2 with another [[AWS service code]] to get the prices of another service.
- Change us-east-1 with another [[AWS region code]] to get the price in a different region


# Thank you 
-	Erik Peterson