Op# lineItem/CurrencyCode



## Source
- Category: [[Identity details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/Lineitem-columns.html)

## Relevant notes
The following #curfield should be all in the currency described by this field. 
- [[lineItem_UnblendedRate]]
- [[lineItem_UnblendedCost]]
- [[lineItem_BlendedCost]]
- [[lineItem_BlendedRate]]
- [[savingsPlan_SavingsPlanRate]]
- [[reservation_EffectiveCost]]
- [[pricing_publicOnDemandRate]]
- [[pricing_publicOnDemandCost]]
- [[reservation_AmortizedUpfrontCostForUsage]]
- [[savingsPlan_SavingsPlanEffectiveCost]]
- and probably others, I might have missed. Any field describing rates or costs should be listed. 

## Notes
- It is USD by default 
- This is valid only for the line
- [link to change currency](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/manage-account-payment.html#manage-account-payment-change-currency)