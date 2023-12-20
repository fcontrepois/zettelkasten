---
publish: true
tags: finops, 
---

# Interesting numbers related to time

## Things that are always true
- 24 hours in a day
- 60 minutes per hour 
- 60 seconds per minute
- 3600 seconds per hour
 - 31 days for January, March, May, July, August, October, December
- 30 days for April, June, September, November
- 28 or 29 (leap year) for February

## Stuff that are mostly true
- The number of day in a year
- 365 days in a normal year and 
- 366 days in a [leap year](https://en.wikipedia.org/wiki/Leap_year)
-  8760 hours in a normal year
	-   8, 7, 6 <- easy to remember :)  
-  8784 hours in a leap year

## Stuff that is a useful approximation 
- [[why 730 hours|730 hours]] per month on average (for a 365 days year)
-  52 weeks per year, the real value is 
	- 52 weeks + 1 day for non-leap years
	- 52 weeks + 2 days for leap years

## Hours
Hours in the day: 24
Hours in a month: 
- 720 for 30 days
- 744 for 31 days
- 696 for 29 days
- 672 for 28 days

## Days
- 31 days for January, March, May, July, August, October, December
- 30 days for April, June, September, November
- 28 or 29 for February

# Excel formula 
## Number of days in a month
A1 contains a date, EOMONTH returns the last day of a month, DAY return the day (1..31 of the date). Smart

```Excel
=DAY(EOMONTH(A1,0))
```