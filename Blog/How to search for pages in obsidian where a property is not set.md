---
created: 2024-01-05
updated: 2024-01-05
publish: true
---
# How to search for pages in obsidian where a property is not set?

## Answer
This is now implemented in Obsidian version 1.5:
- Global Search: Search now works with non-string property values. Search for boolean values `[property:TRUE]` or `[property:FALSE]` or empty values `[property:EMPTY]`. You can also use inequality operators to search for things like `[some_property:>10]`.
