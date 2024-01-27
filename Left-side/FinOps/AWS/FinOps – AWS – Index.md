---
publish: true
created: 2022-03-05
tags:
  - finops
  - aws
  - index
updated: 2023-12-21
---
## CUR 2.0 since November 2023
There is new CUR file format, called CUR 2.0. You can find it in the cost explorer console under the name *Data Exports*. 

- The documentation is available [here](https://docs.aws.amazon.com/cur/latest/userguide/what-is-data-exports.html).
- The dictionary of the CUR 2.0 is [here](https://docs.aws.amazon.com/cur/latest/userguide/table-dictionary-cur2.html).

For me, the most interesting features of the new CUR is the availability of nested data, which means that now there is a single tag column (string type) and inside it the data is nested in key-value pairs. This also means that the new CUR format has a fixed number of columns—this is so much better for dashboarding!

# Interesting facts
- Hourly granularity is a paid feature in Cost Explorer. And it only saves 14 days of data. [[to check]]