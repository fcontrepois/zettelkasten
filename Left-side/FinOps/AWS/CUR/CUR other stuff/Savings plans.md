# Savings Plans
#level100 #cur #finops 

Savings Plans (SP) are the evolution of the [[Reserved Instances]] and provide equivalent discounts but with greater flexibility. SP and RI can both be applied to EC2 but differ on the services they cover.

With SP you commit to an hourly spend and the Saving Plan will be applied to usage until the sum of the *discounted prices* reach your commit. Above it is On-demand territory. 

The order of application of SP is documented [here](https://docs.aws.amazon.com/savingsplans/latest/userguide/sp-applying.html)  and [here](https://docs.aws.amazon.com/cur/latest/userguide/cur-sp.html)

Savings Plans are tricky as the amount you commit to is  the *discounted cost* which is not simple to gather.  

Savings plans being more recent have a much better structure in the CUR file.

## Source
- [AWS documentation - Understanding how Savings Plans apply to your AWS usage](https://docs.aws.amazon.com/savingsplans/latest/userguide/sp-applying.html)
- [AWS documentation - Understanding Savings Plans](https://docs.aws.amazon.com/cur/latest/userguide/cur-sp.html)

## Types of Savings Plans
### Compute Savings Plans
They are the most flexible option and apply to EC2 instance usage regardless of instance family, size, AZ, region, OS or tenancy, and also apply to Fargate or Lambda usage.

### EC2 Instance Savings Plans
They are the most specific option, so get the best discounts. An EC2 Instance Savings Plan is specific to a region and an instance family (m5). 

Being able to change OS is a step forward the [[Separation of infrastructure and software costs]]

### SageMakerSavingsPlans
For SageMaker (ML) plans


## Relevant notes
SavingsPlanCoveredUsage, SavingsPlanNegation, SavingsPlanUpfrontFee, SavingsPlanRecurringFee lines lines are connected via the [[savingsPlan_SavingsPlanArn]]

### Math and checks
[[to complete]]

## Notes
There are five  [[lineItem_LineItemType]] relevant to Reserved Instances. 
- SavingsPlanCoveredUsage 
- SavingsPlanNegation
-  SavingsPlanUpfrontFee
-  SavingsPlanRecurringFee

From the [AWS Documentation](https://docs.aws.amazon.com/cur/latest/userguide/cur-sp.html) [[to complete]]

### -  SavingsPlanUpfrontFee
You will see the SavingsPlanUpfrontFee line when you purchase an *All Upfront* or *Partial Upfront* Savings Plan.

### SavingsPlanRecurringFee
When you buy a *No Upfront* or a *Partial Upfront* savings plan, what has not been paid upfront will be taken each hour. This is what the *SavingsPlanRecurringFee* is about. 

As SP are calculated hourly, there is a SavingsPlanRecurringFee for each hour for CUR with hourly granularity and daily for the one with daily granularity (incredible right :D ) [[to check]]

This is different from RIs where the amount is taken monthly and documented in the RIFee line.

### SavingsPlanCoveredUsage  
The SavingsPlanCoveredUsage* line item describes usage that has been covered by a SavingsPlan. The new thing is that is shows the On-Demand charge that has been covered allowing us to calculate: OD usage easily and also which resource received the benefit of SP. This unblended cost is offset by the corresponding *SavingsPlanNegation* line item.

For each  *SavingsPlanNegation*  liine there is one, or more, *SavingsPlanCoveredUsage* line that cancels it .

- *SavingsPlanNegation* and *SavingsPlanCoveredUsage* are connected by
	- SavingsPlanARN, 
	- Operation, 
	- Usage Type, and 
	- Availability Zone. 

When you have more usage than your Savings Plans commitment can cover, your uncovered usage still appears as a standard *Usage* Line Item.