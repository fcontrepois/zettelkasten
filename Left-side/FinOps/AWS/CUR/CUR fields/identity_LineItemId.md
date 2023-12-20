# identity/LineItemId

#level100 #cur #finops #curfield

This field is an identifyier that based on AWS is only valid for a certain day to connect data that is split on two or more files. It is mostly useless.

## Source
- Category: [[Identity details]] 
- [AWS Documentation](https://docs.aws.amazon.com/cur/latest/userguide/identity-columns.html) 

## Relevant Notes
- This field plus [[identity_TimeInterval]] may to provide a [[Primary keys for the CUR]]

## Notes
- Helps connect a single LineItem split over two files
- An extreme case