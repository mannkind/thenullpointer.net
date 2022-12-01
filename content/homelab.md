---
title: "Homelab"
description: "Details about my homelab and home automation setup"
date: "2021-01-01"
---

This document is a work-in-progress; it will never be complete nor 100% accurate.

My homelab journey started back in 2009 with a ReadyNAS and my home automation journey started in 2013 with Arduino Nanos. I have lots of experience, but will never consider myself an expert. There is always something to learn about!

## Hardware

### 3D Printers

- Prusa MK2S (Shared)
- Prusa Mini+

### Networking

- [UniFi Cloud Key Plus](https://store.ui.com/products/unifi-cloudkey-plus) - UniFi Protect
- Nanopi R6S w/OpenWRT - 2.5Gbps router
- (2) Belkin RT3200 w/OpenWRT - Access Points
- Netgear GS324TP 24 port PoE+ switch

### Server

- Xeon E3 1220v2, AMD64, NixOS 22.05
- Ryzen 3 2600, AMD 5700XT, Windows 11

### Cameras

- (2) [UniFi G4s](https://store.ui.com/collections/unifi-protect-cameras/products/uvc-g4-bullet)
- (2) [UniFi G3 Flex](https://store.ui.com/collections/unifi-protect-cameras/products/unifi-video-g3-flex-camera)
- [UniFi G3 Instant](https://store.ui.com/collections/unifi-protect-cameras/products/unifi-protect-g3-instant-camera)
- [UniFi G4 Doorbell](https://store.ui.com/collections/unifi-protect-cameras/products/uvc-g4-doorbell) - Ding dong!

### Misc

- [Zooz 700 Z-Wave Stick](https://www.thesmartesthouse.com/products/zooz-usb-700-series-z-wave-plus-s2-stick-zst10-700) - My dwindling ZWave network
- [ZZH Zig-a-zig-ah Zigbee Stick](https://electrolama.com/projects/zig-a-zig-ah/) - Zigbee!
- (7) [SmartThings Water Leak Sensors](https://www.amazon.com/dp/B07F951JDP) (Zigbee)
- (3) [GE Switches & Dimmer Switches](https://www.amazon.com/dp/B07RQ8NWXS/) (ZWave)
- (5) [Ikea TRÅDFRI Bulbs](https://www.ikea.com/us/en/p/tradfri-led-bulb-e26-806-lumen-wireless-dimmable-warm-white-warm-white-globe-opal-90457170/) (Zigbee)
- (4) [Ikea TRÅDFRI Smart Buttons](https://www.ikea.com/us/en/p/tradfri-wireless-dimmer-white-10408598/) (Zigbee)

## Software

### Containerization

- K3S - Kubernetes is so hot right now.

### Network

- [Traefik](https://traefik.io/) - a http load balancer, obtains certificates (both external and internal) from Let's Encrypt, managed via labels within the stack definition.
- [Wireguard](https://www.wireguard.com) - a secure connection into my home network.

### IoT/Home Automation

- [FluxCD](https://fluxcd.io/) - continuous deployment of my homelab
- [Mosquitto](https://mosquitto.org/) - a publish-subscribe-based messaging protocol; this runs most of my IoT infrastructure.
- [Home Assistant](https://home-assistant.io) - a home automation software hub; anything not integrated via MQTT is integrated via Home Assistant.
- [Grafana](https://grafana.org) - a data-visualization tool; draws pretty charts and graphs from the data within Influx
- [MySensors](https://mysensors.org) - a sensor framework for many different micro-controllers; I use it for many of my battery powered, custom IoT devices like my soil moisture sensor, and door sensors.
- [ESPHome](https://esphome.io) - a sensor framework for ESP8266 and ESP32 micro-controllers; I use it for most of my other custom IoT devices like my thermostat actuator, garage door actuator, fireplace actuator, etc.
- [apc2mqtt](https://github.com/mannkind/apc2mqtt) - a apcupsd to mqtt bridge process.
- [litterrobot2mqtt](https://github.com/mannkind/litterrobot2mqtt) - a Litter Robot API to mqtt bridge process.
- [mysensorsbootloader2mqtt](http://github.com/mannkind/mysensorsbootloader2mqtt) - a mysensors bootloader to mqtt bridge process.
- [redfin2mqtt](https://github.com/mannkind/redfin2mqtt) - a redfin estimate to mqtt bridge process.
- [rtl-433](https://github.com/hertzg/rtl_433_docker) - a program to process 433mhz radio signals.
- [unifi2mqtt](https://github.com/mannkind/unifi2mqtt) - a Unifi Controller device status to mqtt bridge process.
- [wsdot2mqtt](https://github.com/mannkind/wsdot2mqtt) - a wsdot travel times to mqtt bridge process.

### Databases

- [InfluxDB](https://www.influxdata.com/) - a time-series datastore; Home Assistant publishes sensor changes into Influx
- [PostgreSQL](https://www.postgresql.org/) - a relational database that houses data for Miniflux and Home Assistant.

### Misc. Self-Hosted

- [Actual](https://github.com/actualbudget/actual-server) - budgeting software; once Actual has a mobile interface I'm bailing on YNAB.
- [Borg Backup + Rclone](https://github.com/mannkind/borg-rclone-autobackup) - automated backups for all my servers, rclone'd to Backblaze B2.
- [Linkding](https://github.com/sissbruecker/linkding) - a self-hosted bookmark service.
- [Miniflux](https://miniflux.app) - an opinionated RSS feed reader; replaced Feedly and Google Reader before that.
