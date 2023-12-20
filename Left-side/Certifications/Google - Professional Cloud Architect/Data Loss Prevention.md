---
publish: true
tags: googlecloud, certification
---

# Data Loss Prevention (dlp)
- [Main page](https://cloud.google.com/dlp)
- *Fully managed service designed to help you discover, classify, and protect your most sensitive data.*

# Tech thinks to remember
-

## Use cases
- Data Loss Prevention discovers, classifies and **masks** sensitive data
- Data like: personally identifying information (PII), credentials, keys, country specific identifiers.
- Measure the re-identification risk
- Uses InfoTypes which are patterns to identify sensitive data like:
	- date of birth
	- authentication tokens
	- passwords
	- social security numbers
	- [Full list from Google Cloud Doc](https://cloud.google.com/dlp/docs/infotypes-reference)

### Inspection jobs
Check a dataset using the InfoTypes. It returns the:
- InfoType
- likelihood score
- location

### Risk Analysis jobs
To do after masking. To get an idea of how protected is the data.
