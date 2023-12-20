---
created: 2023-10-13
updated: 2023-10-13
publish: true
---
#finops  #azure 

[Original link](https://learn.microsoft.com/en-us/azure/virtual-machines/vm-naming-conventions)

**[Family]** + __[Sub-family_]_* + **[# of vCPUs]** + __[Constrained vCPUs_]_* + **[Additive Features]** + __[Accelerator Type_]_* + **[Version]**

|Value|Explanation|
|---|---|
|Family|Indicates the VM Family Series|
|*Subfamily|Used for specialized VM differentiations only|
|# of vCPUs|Denotes the number of vCPUs of the VM|
|*Constrained vCPUs|Used for certain VM sizes only. Denotes the number of vCPUs for the [constrained vCPU capable size](https://learn.microsoft.com/en-us/azure/virtual-machines/constrained-vcpu)|
|Additive Features|Lower case letters denote additive features, such as:  <br>a = AMD-based processor  <br>b = Block Storage performance  <br>d = diskful (that is, a local temp disk is present); this feature is for newer Azure VMs, see [Ddv4 and Ddsv4-series](https://learn.microsoft.com/en-us/azure/virtual-machines/ddv4-ddsv4-series)  <br>i = isolated size  <br>l = low memory; a lower amount of memory than the memory intensive size  <br>m = memory intensive; the most amount of memory in a particular size  <br>p = ARM Cpu  <br>t = tiny memory; the smallest amount of memory in a particular size  <br>s = Premium Storage capable, including possible use of [Ultra SSD](https://learn.microsoft.com/en-us/azure/virtual-machines/disks-types#ultra-disks) (Note: some newer sizes without the attribute of s can still support Premium Storage, such as M128, M64, etc.)  <br>C = Confidential  <br>NP = node packing|
|*Accelerator Type|Denotes the type of hardware accelerator in the specialized/GPU SKUs. Only the new specialized/GPU SKUs launched from Q3 2020 have the hardware accelerator in the name.|
|Version|Denotes the version of the VM Family Series|

[](https://learn.microsoft.com/en-us/azure/virtual-machines/vm-naming-conventions#example-breakdown)

## Example breakdown

**[Family]** + __[Subfamily_]_* + **[# of vCPUs]** + **[Additive Features]** + __[Accelerator Type_]_* + **[Version]**

[](https://learn.microsoft.com/en-us/azure/virtual-machines/vm-naming-conventions#example-1-m416ms_v2)

### Example 1: M416ms_v2

|Value|Explanation|
|---|---|
|Family|M|
|# of vCPUs|416|
|Additive Features|m = memory intensive  <br>s = Premium Storage capable|
|Version|v2|

[](https://learn.microsoft.com/en-us/azure/virtual-machines/vm-naming-conventions#example-2-nv16as_v4)

### Example 2: NV16as_v4

|Value|Explanation|
|---|---|
|Family|N|
|Subfamily|V|
|# of vCPUs|16|
|Additive Features|a = AMD-based processor  <br>s = Premium Storage capable|
|Version|v4|