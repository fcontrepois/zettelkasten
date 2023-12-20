---
publish: true
tags: googlecloud, certification
---

# App Engine
- [Main page](https://cloud.google.com/appengine/)


# Tech thinks to remember
- Platform as a Service
- Well suited for microservices
- Can run containers
- Has a cron engine

## Standard
- pre-configured containers
- secure sandbox
	- cannot connect to outside resources
- Autoscale happens in seconds
- Pricing based on instance hours
- Languages:
	- Python
	- Java
	- PHP
	- Go
	- Node.js
	- Ruby

## Flexible
- Runs customised containers
- 1 minute to load vs seconds for Standard
- price based on CPU, memory, disk
- can connect to on-prem computers
	- even via VPN

## Scaling
- Automatic, based on request rate, latency
- Basic is create a instance when there is a call
- Manual is a fixed number of instances
- Configured by app.yaml

## Traffic Splitting
- based on client IP - stick
- http cookies - more precise stick. 
- random