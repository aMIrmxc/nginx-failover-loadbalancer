# Next.js Load Balancing & Failover Demo

A practical demonstration of load balancing and failover using Next.js, Nginx, Docker, and Docker Compose.

## Overview

This project demonstrates how to deploy multiple instances of a Next.js application behind an Nginx load balancer using Docker Compose.

The main goals are:

* Run multiple Next.js containers
* Distribute incoming traffic using Nginx
* Identify which container serves each request
* Simulate high availability (HA)
* Demonstrate automatic failover when one container becomes unavailable

## Architecture

```text
                    ┌─────────────┐
                    │   Client    │
                    └──────┬──────┘
                           │
                           ▼
                ┌──────────────────┐
                │  Nginx Load      │
                │   Balancer       │
                └──────┬─────┬─────┘
                       │     │
             ┌─────────┘     └─────────┐
             ▼                         ▼
    ┌─────────────────┐      ┌─────────────────┐
    │ Next.js Node 1  │      │ Next.js Node 2  │
    │ SERVER_NAME=A   │      │ SERVER_NAME=B   │
    └─────────────────┘      └─────────────────┘
```

## Technologies

* Next.js
* Nginx
* Docker
* Docker Compose

## Features

* Round-robin load balancing
* Health-aware upstream configuration
* Automatic failover
* Containerized deployment
* Dynamic server identification via environment variables

## Project Structure

```text
.
├── app/
├── nginx/
│   └── nginx.conf
├── Dockerfile
├── docker-compose.yml
└── README.md
```

## How It Works

Each Next.js container receives a unique `SERVER_NAME` environment variable.

When a request reaches the application, the server name is displayed on the page. This allows us to verify which container processed the request.

Nginx acts as a reverse proxy and distributes requests between available application instances.

If one instance becomes unavailable, Nginx temporarily removes it from the upstream pool and forwards traffic to the remaining healthy instance.

## Running the Project

Build and start all services:

```bash
docker-compose up --build -d
```

Open your browser:

```text
http://localhost
```

## Verifying Load Balancing

Refresh the page multiple times.

The displayed server name should alternate between:

* Server-Primary
* Server-Backup

indicating that requests are being distributed across both containers.

## Testing Failover

Stop one of the application containers:

```bash
docker stop nextjs-node-1
```

Refresh the page.

All requests should now be served by:

```text
Server-Backup
```

Restart the stopped container:

```bash
docker start nextjs-node-1
```

After a short period, Nginx will resume routing traffic to both containers.

## Learning Objectives

This lab helps understand:

* Reverse Proxy concepts
* Load Balancing strategies
* High Availability architecture
* Container orchestration with Docker Compose
* Nginx upstream configuration
* Failover mechanisms in distributed systems

