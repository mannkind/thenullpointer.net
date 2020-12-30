---
title: "Homelab"
description: "Details about my homelab and home automation setup"
date: "2019-01-01"
---

This document is a work-in-progress; it will never be complete nor 100% accurate.

My home journey started back in 2009 with a ReadyNAS and my home automation journey started in 2013 with Arduino Nanos. I have lots of experience, but will never consider myself an expert. There is always something to learn about!

## Gory Details

### Networking

- UniFi Security Gateway
- UniFi AC-PRO
- (3) UniFi 8-port POE Switches

### Server

- (1) Xeon E3 1250v2, AMD64, NixOS 20.09

### Cameras

- (2) Hikvision Cubes
- (3) XiaoFang cameras running FangHacks

### Off-the-Shelf Hardware

- [Linear HUSBZB1](https://www.amazon.com/dp/B01GJ826F8) - ZWave and Zigbee Stick
- [Dome Water Shutoff Valve](https://www.amazon.com/dp/B01LX3JFR8) (ZWave)
- (7) [SmartThings Water Leak Sensors](https://www.amazon.com/dp/B07F951JDP) (Zigbee)
- (3) [GE Switches & Dimmer Switches](https://www.amazon.com/dp/B07RQ8NWXS/) (ZWave)
- (5) [Ikea TRÅDFRI Bulbs](https://www.ikea.com/us/en/p/tradfri-led-bulb-e26-806-lumen-wireless-dimmable-warm-white-warm-white-globe-opal-90457170/) (Zigbee)
- (4) [Ikea TRÅDFRI Smart Buttons](https://www.ikea.com/us/en/p/tradfri-wireless-dimmer-white-10408598/) (Zigbee)

## Containerization

- Docker - it's what all the cool kids are using, and really does make my server maintenance easier. I jump around between a single host running Docker, to a mult-architecture (x86 and arm64) cluster, to a single host Docker Swarm. It's fun to experiment.

## Software

### Network

- [Traefik](https://traefik.io/) - a http load balancer, obtains certificates (both external and internal) from Let's Encrypt, managed via labels within the stack definition.
- [DNSCrypt Proxy](https://github.com/DNSCrypt/dnscrypt-proxy) - DNS over HTTPS; all outgoing udp-based dns traffic is blocked at the Unifi Security Gateway.
- [Wireguard](https://www.wireguard.com) - a secure connection into my home network.

### IoT/Home Automation

- [Mosquitto](https://mosquitto.org/) - a publish-subscribe-based messaging protocol; this runs most of my IoT infrastructure.
- [Home Assistant](https://home-assistant.io) - a home automation software hub; anything not integrated via MQTT is integrated via Home Assistant.
- [Grafana](https://grafana.org) - a data-visualization tool; draws pretty charts and graphs from the data within Influx
- [Node-Red](https://node-red.org) - a flow-based, automation tool; creates complex automations for Home Assistant. Home Assistant does have a yaml-based automation system (which works just fine, despite what Node-Red propoents say) it's just a lot more _fun_ to visualize and debug automations in Node-Red.
- [MySensors](https://mysensors.org) - a sensor framework for many different micro-controllers; I use it for many of my battery powered, custom IoT devices like my soil moisture sensor, and door sensors.
- [ESPHome](https://esphome.io) - a sensor framework for ESP8266 and ESP32 micro-controllers; I use it for most of my other custom IoT devices like my thermostat actuator, garage door actuator, fireplace actuator, etc.
- [litterrobot2mqtt](https://github.com/mannkind/litterrobot2mqtt) - a Litter Robot API to mqtt bridge process.
- [mysensorsbootloader2mqtt](http://github.com/mannkind/mysensorsbootloader2mqtt) - a mysensors bootloader to mqtt bridge process.
- [seattlewaste2mqtt](http://github.com/mannkind/seattlewaste2mqtt) - a seattle waste collection schedule to mqtt bridge process.
- [unifi2mqtt](https://github.com/mannkind/unifi2mqtt) - a Unifi Controller device status to mqtt bridge process.
- [wsdot2mqtt](https://github.com/mannkind/wsdot2mqtt) - a wsdot travel times to mqtt bridge process.
- [zillow2mqtt](https://github.com/mannkind/zillow2mqtt) - a zillow zestimate to mqtt bridge process.

### Databases

- [InfluxDB](https://www.influxdata.com/) - a time-series datastore; Home Assistant publishes sensor changes into Influx
- [PostgreSQL](https://www.postgresql.org/) - a relational database that houses data for Miniflux and Home Assistant.

### Misc. Self-Hosted

- [Miniflux](https://miniflux.app) - an opinionated RSS feed reader; replaced Feedly and Google Reader before that.
- [UniFi Controller](https://www.ui.com/software/) - a unified controller for Ubiquiti UniFi hardware.
- [Borg Backup + Rclone](https://github.com/mannkind/borg-rclone-autobackup) - automated backups for all my servers, rclone'd to Backblaze B2.
