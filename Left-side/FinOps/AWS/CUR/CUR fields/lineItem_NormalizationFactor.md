# lineItem/NormalizationFactor


#level100 #cur #finops #curfield

## Source
- Category: [[Line item details]]
- [AWS documentation](https://docs.aws.amazon.com/cur/latest/userguide/Lineitem-columns.html#Lineitem-details-N)

## Relevant notes
The normalization factor is the value that correspond to the size of the instance and is used for [[Size Flexible Reserved instances]]

## Notes

[[pricing_publicOnDemandRate]] are also based on the normalisation factor. A 2xlarge rate is always twice the rate of xlarge

| Instance size | Normalization factor |
| ------------- | -------------------- |
| nano          | 0.25                 |
| micro         | 0.5                  |
| small         | 1                    |
| medium        | 2                    |
| large         | 4                    |
| xlarge        | 8                    |
| 2xlarge       | 16                   |
| 4xlarge       | 32                   |
| 8xlarge       | 64                   |
| 10xlarge      | 80                   |
| 16xlarge      | 128                  |
| 32xlarge      | 256                  |