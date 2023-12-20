---
tags:finops,cur
publish:true
---

From the [AWS documentation](https://aws.amazon.com/aws-cost-management/aws-cost-categories/) and [AWS How To](https://aws.amazon.com/aws-cost-management/resources/managing-your-costs-with-aws-cost-categories/)

Cost categories are a powerful tool for organizing and categorizing costs within an organization. They allow for the creation of rules to combine multiple fields from the cost and usage report (CUR) into a new category, also known as synthetic tags or calculated fields. These calculated fields are derived from other CUR fields, providing a way to extract information without the need for manual tagging.

For example, it is possible to create a cost category named "Environment" calculated from a rule like: if the account number is 12121 or 12312 then the value is "Production", if the account number is 429 or 2398 or 329 then the value is "Development", otherwise the value is "Shared". This allows you to easily understand and track the costs associated with each environment.

In addition to providing an organizational structure, cost categories also offer the ability to split costs between teams. This helps allocate shared costs and can be done using three different algorithms: Proportional, Fixed, and Even Split. Proportional allocation shares costs in proportion to the overall cost, Fixed allocation assigns a fixed percentage to each team, and Even Split evenly divides the total cost among the teams.