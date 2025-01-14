---
title: "Showcase"
description: "Details about my maker hardware, network setup, homelab, home automation, and more"
date: "2026-01-01"
---

This document chronicles my ongoing homelab and home automation journey—it's perpetually evolving and will never be completely finished or 100% accurate.

My homelab adventure began in 2009 with a simple ReadyNAS, while my home automation obsession started in 2013 with Arduino Nanos. Over the years, I've accumulated substantial experience, though I'll never claim to be an expert—there's always something new to learn and explore!

## Hardware

### 3D Printers / CNC Machines

- BambuLab H2C with two AMS 2 Pros and an AMS HT
- Prusa MK4S  
- YoraHome Mandril CNC

### Networking

- UniFi Cloud Gateway Fiber
- QNAP QSW-M2116P-2T2S - Multi-gig switch with two 10G SFP+/10Gbe ports, remainder are 2.5Gbe
- UniFi U7 Lite (x2)
- UniFi 5G Max Outdoor (soon!)

### Storage

- TrueNAS Scale VM with hardware passthrough
- Multiple drive bays for redundant storage
- Automated backups with Kopia

### Server(s)

#### Primary/General Hypervisor
Serves as the backbone, running clusters, NAS, and virtual workstation.

- Intel Core i7-13700 - Built-in iGPU for hardware transcoding
- AsrockRack W680D4U-2•2T - Server motherboard with built-in 10Gbe connectivity
- 128GB DDR5 ECC memory - Enterprise-grade reliability
- Hosts both development and production Kubernetes clusters

#### Stratum 1 PTP/NTP Server
Precision timing for the entire network using GPS synchronization.

- Raspberry Pi CM4 - Compact compute module
- Waveshare PoE Carrier board - Power over Ethernet
- UBlox LEA-M8T concurrent GNSS receiver - Sub-microsecond accuracy

### Cameras

- (2) [Reolink Trackmix](https://reolink.com/us/product/reolink-trackmix-poe/) - Pan/tilt/zoom capabilities
- (3) [Reolink RLC-833A](https://reolink.com/us/product/rlc-833a/) - 4K fixed cameras
- [Reolink E1 Outdoor](https://m.reolink.com/us/product/e1-outdoor-poe/) - Compact outdoor coverage
- [Reolink Doorbell](https://reolink.com/us/product/reolink-video-doorbell/) - Front door monitoring

### Blinds

- (5) Hunter Douglas PowerView Gen3 - Premium automated blinds
- (3) [Zemismart ZM85EL-2Z](https://www.zemismart.com/products/zm85el-2z) - Budget-friendly automation
- [Switchbot Tilt](https://us.switch-bot.com/products/switchbot-blind-tilt) - Retrofit tilt control

### Miscellaneous Smart Devices

- [Zooz 700 Z-Wave Stick](https://www.thesmartesthouse.com/products/zooz-usb-700-series-z-wave-plus-s2-stick-zst10-700) - Managing my legacy Z-Wave network
- [ZZH Zig-a-zig-ah Zigbee Stick](https://electrolama.com/projects/zig-a-zig-ah/) - Zigbee coordination
- (7) [SmartThings Water Leak Sensors](https://www.amazon.com/dp/B07F951JDP) (Zigbee) - Peace of mind
- (3) [GE Switches & Dimmer Switches](https://www.amazon.com/dp/B07RQ8NWXS/) (Z-Wave) - Reliable lighting control
- (5) [Ikea TRÅDFRI Bulbs](https://www.ikea.com/us/en/p/tradfri-led-bulb-e26-806-lumen-wireless-dimmable-warm-white-warm-white-globe-opal-90457170/) (Zigbee) - Affordable smart lighting
- (4) [Ikea TRÅDFRI Smart Buttons](https://www.ikea.com/us/en/p/tradfri-wireless-dimmer-white-10408598/) (Zigbee) - Simple scene control

## Software

**Infrastructure & Orchestration:**
- [Incus](https://linuxcontainers.org/incus/) - Open-source hypervisor running VMs and LXC containers; currently using LXC containers as K3S nodes for efficiency
- [OpenTofu](https://opentofu.org) - Infrastructure-as-code for repeatable homelab deployments and DNS provider management
- [K3S](https://k3s.io) - Lightweight Kubernetes distribution (because Kubernetes is still hot and I like making simple things complicated)
- [ArgoCD](https://argoproj.github.io/cd/) - GitOps continuous deployment ensuring my homelab applications stay in sync with Git

**Networking & Load Balancing:**
- [Traefik](https://traefik.io/) - HTTP load balancer with automatic Let's Encrypt certificate management
- [MetalLB](https://metallb.universe.tf) - Bare-metal load balancer enabling shared IPs between cluster members
- [Tailscale](https://www.tailscale.com) - Secure access to broader "home" network

**Home Automation & IoT:**
- [Home Assistant](https://home-assistant.io) - Central home automation hub
- [Mosquitto](https://mosquitto.org/) - MQTT broker for IoT device communication
- [ZWave2MQTT](https://github.com/zwave-js/zwave-js-ui) - Z-Wave network management
- [Zigbee2MQTT](https://www.zigbee2mqtt.io) - Zigbee network management
- [ESPHome](https://esphome.io) - Custom IoT device firmware for ESP8266/ESP32 controllers (thermostat, garage door, fireplace actuators, etc.)

**Data & Monitoring:**
- [InfluxDB](https://www.influxdata.com/) - Time-series database for sensor data storage
- [Grafana](https://grafana.org) - Data visualization creating beautiful charts and dashboards
- [PostgreSQL](https://www.postgresql.org/) - Relational database for Miniflux and Home Assistant

**Media & Entertainment:**
- [Plex](https://plex.tv) - Media streaming with hardware transcoding
- [Jellyfin](https://jellyfin.org) - Open-source media streaming (still working to match Plex's polish; audio passthrough still janky)

**Productivity & Utilities:**
- [Actual Budget](https://github.com/actualbudget/actual-server) - Replaced YNAB5 in late 2025
- [Miniflux](https://miniflux.app) - Minimalist RSS feed reader (successor to Feedly and Google Reader)
- [Kopia](https://kopia.io) - Automated backup solution with encryption and deduplication

## What's Next

**Planned Upgrades:**
- UniFi 5G Max Outdoor deployment for better internet fallback
- Additional storage expansion for media library growth
- Migration from remaining Z-Wave devices to Zigbee for consistency
- Exploring Matter/Thread integration as the standard matures
- Always evaluating new self-hosted applications that can replace cloud services

**Ongoing Projects:**
- Pending Actual budget [merge request](https://github.com/actualbudget/actual/pull/6157) to add payee geolocation functionality
- Custom ESP32-based environmental sensors for every room
- Advanced automation rules based on presence detection and weather
- Perfect the Jellyfin setup to fully replace Plex dependency
