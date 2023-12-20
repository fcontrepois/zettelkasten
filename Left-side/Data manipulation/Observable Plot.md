---
created: 2023-10-01
updated: 2023-10-02
publish: true
---
#observable
# Observable Plot
[Main Plot page](https://observablehq.com/plot/)


This is the summary page of my learnings of Observable Plot, a Javascript library to generate beautiful graphs. 

## Scales
> In Plot, the [mark](https://observablehq.com/plot/features/marks) binds channels to scales

>Scales aren’t limited to horizontal and vertical position. They can also output to color, radius, length, opacity, and more.
> https://observablehq.com/plot/features/scales

- **linear** (default) - linear transform (translate and scale)
- **pow** - power (exponential) transform
- **sqrt** - square-root transform (_pow_ transform with exponent = 0.5)
- **log** - logarithmic transform
- **symlog** - bi-symmetric logarithmic transform per [Webber _et al._](https://www.researchgate.net/publication/233967063_A_bi-symmetric_log_transformation_for_wide-range_data)
-  **utc** (default, recommended) - UTC time
- **time** - local time

Often less used scale options
- **domain** - typically [_min_, _max_], or an array of ordinal or categorical values
- **range** - typically [_min_, _max_], or an array of ordinal or categorical values
- **unknown** - the desired output value (defaults to undefined) for invalid input values
- **reverse** - reverses the domain (or the range), say to flip the chart along _x_ or _y_
- **interval** - an interval or time interval (for interval data; see below)

## Data
> Data comes in different types: quantitative (or temporal) values can be subtracted, ordinal values can be ordered, and nominal (or categorical) values can only be the same or different.
> 
>Because nominal values often need some arbitrary order for display purposes — often alphabetical — Plot uses the term _ordinal_ to refer to both ordinal and nominal data.
> https://observablehq.com/plot/features/marks#marks-imply-data-types

## Facets
[Beautiful graphs](https://observablehq.com/plot/features/facets#facets)
## Projection (the world)
Different types of ways to show the globe and geographic content

- _conformal_ projections preserve angles and local shape,
- _equal-area_ projections preserve area (use these for choropleths),
- _equidistant_ projections preserve distance from one (or two) points,
- _azimuthal_ projections expand radially from a central feature,
- _cylindrical_ projections have symmetry around the axis of rotation,
- the _stereographic_ projection preserves circles, and
- the _gnomonic_ projection displays all great circles as straight lines!