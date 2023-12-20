---
publish: true
tags: googlecloud, certification
---

# Google Cloud Compute Engine

- [Main page](https://cloud.google.com/compute)
- [VM instance lifecycle](https://cloud.google.com/compute/docs/instances/instance-life-cycle)

# Tech thinks to remember
- templates are immutable, it cannot be updated. 

# Managed Instance Groups (MIG)
- one template for all
	- Image -> template -> MIG
- MIG stateless -> use a template and replicate
- MIG stateful -> template + disk policy + instance policy
# Unmanaged Instance Groups  
- mostly for legacy migration from datacentre
- heterogeneous group of VM
- no support for autoscaling, LB, updates

## Machine configuration
-   **Machine family**: A curated set of processor and hardware configurations optimized for specific workloads. During the VM creation process, you choose your preferred machine family and configure your VM.
-   **Series**: Within the console, machine families are further classified by series generation. Newer VMs are listed under second generation, and older VMs are listed under first generation.
-   **Machine type**: Every machine family has predefined machine shapes that have a specific vCPU to memory ratio that fits a variety of workload needs. If a predefined machine type does not meet your needs, you can create a custom machine for any general-purpose VM.

## Machine family

![[Google Cloud VM families.png]]

### General purpose
- [link](https://cloud.google.com/compute/docs/general-purpose-machines)
- **N2** VMs offer up to 128 vCPUs, 8 GB of memory per vCPU, and are available on the Intel Ice Lake and Cascade Lake CPU platforms.
-   **N2D** VMs offer up to 224 vCPUs, 8 GB of memory per vCPU, and are available on second generation AMD EPYC Rome platforms.
-   **Tau T2D** VMs offer up to 60 vCPUs, 4 GB of memory per vCPU, and are available on third generation AMD EPYC Milan processors. Tau T2D VMs have cluster-threading disabled, therefore a vCPU is equivalent to an entire core.
-   **N1** VMs offer up to 96 vCPUs, 6.5 GB of memory per vCPU, and are available on Intel Sandy Bridge, Ivy Bridge, Haswell, Broadwell, and Skylake CPU platforms.
### Shared core for E2 and N1
- This can be a cost-effective method for running small, non-resource intensive apps.
- E2: `e2-micro`, `e2-small`, and `e2-medium` shared-core VMs have 2 vCPUs available for short periods of bursting.
-   N1: `f1-micro` and `g1-small` shared-core VMs have up to 1 vCPU available for short periods of bursting.
### compute-optimized
- [C2 VMs](https://cloud.google.com/compute/docs/compute-optimized-machines#c2_machine_types)

### memory-optimized - for SAP HANA
- [M1 VMs](https://cloud.google.com/compute/docs/memory-optimized-machines#m1_machine_types)

- [M2 VMs](https://cloud.google.com/compute/docs/memory-optimized-machines#m2_machine_types) 
	- M2 VMs do not support preemptible VMs.

### accelerator-optimized
- [A2 VMs](https://cloud.google.com/compute/docs/accelerator-optimized-machines#a2_machine_types) with NVIDIA's new Ampere [A100 GPUs](https://www.nvidia.com/en-us/data-center/a100/)

## Disks auto delete
By default disks are deleted when a VM is deleted unless the disk has `no-auto-delete` set to keep content. [Documentation](https://cloud.google.com/sdk/gcloud/reference/compute/instances/set-disk-auto-delete) 

```shell
$ gcloud compute instances set-disk-auto-delete my-instance --no-auto-delete --disk=my-disk
```
and its opposite

```shell
$ gcloud compute instances set-disk-auto-delete my-instance --auto-delete --disk=my-disk
```

## Shutdown script
- [documentation](https://cloud.google.com/compute/docs/shutdownscript)
	- [Startup scripts](https://cloud.google.com/compute/docs/instances/startup-scripts)
	- [Metadata server](https://cloud.google.com/compute/docs/metadata/overview)