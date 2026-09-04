---
title: "Showcase"
description: "Details about my maker hardware, network setup, homelab, home automation, and more"
date: "2026-09-01"
---

This document chronicles my ongoing homelab and home automation journey—it's perpetually evolving and will never be completely finished or 100% accurate.

My homelab adventure began in 2009 with a simple ReadyNAS, while my home automation obsession started in 2013 with Arduino Nanos. Over the years, I've accumulated substantial experience, though I'll never claim to be an expert—there's always something new to learn and explore!

## Hardware

### 3D Printers / CNC Machines

- BambuLab H2C with two AMS 2 Pros and an AMS HT
- Prusa MK4S  
- YoraHome Mandril CNC

### Networking

- UniFi Cloud Gateway Fiber - Primary site gateway
- QNAP QSW-M2116P-2T2S - Multi-gig switch with two 10G SFP+/10Gbe ports, remainder are 2.5Gbe
- UniFi U7 Lite (x2)
- UniFi 5G Max Outdoor - Cellular fallback when the fiber drops
- UniFi Dream Router 5G - Gateway and cellular WAN at the second site

### Storage

- Multiple drive bays for redundant storage
- Automated backups with Kopia

### Server(s)

#### Primary/General Hypervisor
Serves as the backbone, running storage, containers, and a virtual workstation.

- Intel Core i7-13700 - Built-in iGPU for hardware transcoding
- AsrockRack W680D4U-2•2T - Server motherboard with built-in 10Gbe connectivity
- 128GB DDR5 ECC memory - Enterprise-grade reliability
- Runs IncusOS, with the Docker hosts living in Incus VMs

#### Second Site
- UniFi Dream Router 5G - Gateway, Wi-Fi, and cellular WAN in one box
- Raspberry Pi 5 (8GB) - Runs home assistant, zigbee2mqtt, meshcore remoteterm, birdnet-go

#### Third Site
- Raspberry Pi 5 (4GB) - Runs home assistant, meshcore remoteterm, birdnet-go

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
- [IncusOS](https://github.com/lxc/incus-os) - Immutable host OS underneath the hypervisor
- [Incus](https://linuxcontainers.org/incus/) - Open-source hypervisor running VMs and LXC containers
- [Docker](https://www.docker.com) - Moved away from k3s after an failed ipgrade
- [Arcane](https://getarcane.app) - Web UI for managing Docker containers and Compose stacks across hosts
- [OpenTofu](https://opentofu.org) - Infrastructure-as-code for repeatable homelab deployments and DNS provider management

**Networking & Load Balancing:**
- [Traefik](https://traefik.io/) - HTTP load balancer with automatic Let's Encrypt certificate management

**Home Automation & IoT:**
- [Home Assistant](https://home-assistant.io) - Central home automation hub
- [Mosquitto](https://mosquitto.org/) - MQTT broker for IoT device communication
- [ZWave2MQTT](https://github.com/zwave-js/zwave-js-ui) - Z-Wave network management
- [Zigbee2MQTT](https://www.zigbee2mqtt.io) - Zigbee network management
- [ESPHome](https://esphome.io) - Custom IoT device firmware for ESP8266/ESP32 controllers (thermostat, garage door, fireplace actuators, etc.)
- [Music Assistant](https://music-assistant.io) - Ties my music libraries and speakers into Home Assistant

**Data & Monitoring:**
- [InfluxDB](https://www.influxdata.com/) - Time-series database for sensor data storage
- [Grafana](https://grafana.org) - Data visualization creating beautiful charts and dashboards
- [PostgreSQL](https://www.postgresql.org/) - Relational database for Miniflux and Home Assistant
- [BirdNET-Go](https://github.com/tphakala/birdnet-go) - Identifies birds by song from a backyard mic and logs what shows up
- [changedetection.io](https://changedetection.io) - Watches pages that have no RSS feed and tells me when they change

**Media & Entertainment:**
- [Plex](https://plex.tv) - Media streaming with hardware transcoding
- [Jellyfin](https://jellyfin.org) - Open-source media streaming (still working to match Plex's polish; audio passthrough still janky)

**Maker:**
- [Bambuddy](https://github.com/maziggy/bambuddy) - Self-hosted print archive and monitoring for the Bambu printers, no cloud round trip

**Productivity & Utilities:**
- [Actual Budget](https://github.com/actualbudget/actual-server) - Replaced YNAB5 in late 2025
- [Miniflux](https://miniflux.app) - Minimalist RSS feed reader (successor to Feedly and Google Reader)
- [Vaultwarden](https://github.com/dani-garcia/vaultwarden) - Bitwarden-compatible password server
- [Kopia](https://kopia.io) - Automated backup solution with encryption and deduplication
- [TREK](https://liketrek.com/) - Trip planner with maps, budgets, and packing lists
- WelcomeMat - Reservation system for friends and family
