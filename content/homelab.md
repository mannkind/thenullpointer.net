---
title: "Homelab"
description: "Details about my homelab and home automation setup"
date: "2023-08-28"
---

This document is a work-in-progress; it will never be complete nor 100% accurate.

My homelab journey started back in 2009 with a ReadyNAS and my home automation journey started in 2013 with Arduino Nanos.

I have lots of experience, but will never consider myself an expert; there is always something to learn about!

## Hardware

### 3D Printers

- Prusa MK4
- Prusa Mini+
- Prusa MK2S (Shared)

### CNC Machines

- YoraHome Mandril

### Networking

- R86S - Opnsense router w/10G SFP+ and three 2.5Gbe
- QNAP QSW-M2116P-2T2S - Multi-gig switch with two 10G SFP+/10Gbe, and the remainder are 2.5Gbe
- GWB7664 - Wifi 6 Access Point

### Server(s)

#### Primary/General Hypervisor
Runs the clusters, NAS, and virtual workstation.

- Intel Core i7-13700 - Built-in iGPU
- AsrockRack W680D4U-2•2T - Built-in 10Gbe
- 64GB DDR5 ECC
- Proxmox Hypervisor

#### Stratum 1 PTP/NTP Server
- Raspberry Pi CM4
- Waveshare PoE Carrier board
- UBlox LEA-M8T concurrent GNSS receiver

### Cameras

- (2) [Reolink Trackmix](https://reolink.com/us/product/reolink-trackmix-poe/)
- (3) [Reolink RLC-833A](https://reolink.com/us/product/rlc-833a/)
- [Reolink E1 Outdoor](https://m.reolink.com/us/product/e1-outdoor-poe/)
- [Reolink Doorbell](https://reolink.com/us/product/reolink-video-doorbell/)

### Misc

- [Zooz 700 Z-Wave Stick](https://www.thesmartesthouse.com/products/zooz-usb-700-series-z-wave-plus-s2-stick-zst10-700) - My dwindling ZWave network
- [ZZH Zig-a-zig-ah Zigbee Stick](https://electrolama.com/projects/zig-a-zig-ah/) - Zigbee!
- (7) [SmartThings Water Leak Sensors](https://www.amazon.com/dp/B07F951JDP) (Zigbee)
- (3) [GE Switches & Dimmer Switches](https://www.amazon.com/dp/B07RQ8NWXS/) (ZWave)
- (5) [Ikea TRÅDFRI Bulbs](https://www.ikea.com/us/en/p/tradfri-led-bulb-e26-806-lumen-wireless-dimmable-warm-white-warm-white-globe-opal-90457170/) (Zigbee)
- (4) [Ikea TRÅDFRI Smart Buttons](https://www.ikea.com/us/en/p/tradfri-wireless-dimmer-white-10408598/) (Zigbee)

## Software

- [K3S](https://k3s.io) - Kubernetes is so hot right now.
- [Traefik](https://traefik.io/) - a http load balancer, obtains certificates (both external and internal) from Let's Encrypt, managed via labels within the stack definition.
- [Wireguard](https://www.wireguard.com) - a secure connection into my home network.
- [ArgoCD](https://argoproj.github.io/cd/) - continuous deployment of my homelab
- [Longhorn](https://longhorn.io) - distributed block storage
- [Mosquitto](https://mosquitto.org/) - a publish-subscribe-based messaging protocol
- [Home Assistant](https://home-assistant.io) - a home automation software hub
- [Grafana](https://grafana.org) - a data-visualization tool; draws pretty charts and graphs from the data within Influx
- [ESPHome](https://esphome.io) - a sensor framework for ESP8266 and ESP32 micro-controllers; I use it for most of my other custom IoT devices like my thermostat actuator, garage door actuator, fireplace actuator, etc.
- [InfluxDB](https://www.influxdata.com/) - a time-series datastore; Home Assistant publishes sensor changes into Influx
- [PostgreSQL](https://www.postgresql.org/) - a relational database that houses data for Miniflux and Home Assistant.
- [Actual](https://github.com/actualbudget/actual-server) - budgeting software; once Actual has a mobile interface I'm bailing on YNAB.
- [Kopia](https://kopia.io) - automated backups
- [Miniflux](https://miniflux.app) - an opinionated RSS feed reader; replaced Feedly and Google Reader before that.
- [ZWave2MQTT](https://github.com/zwave-js/zwave-js-ui) -  Manages the zwave network.
- [Zigbee2MQTT](https://www.zigbee2mqtt.io) - Manages the zigbee network. 
- [Plex](https://plex.tv) - media streaming with hardware transcoding.
- [Jellyfin](https://jellyfin.org) - open-source media stream; still has a long way to go to be better than Plex.
