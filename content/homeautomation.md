+++
Description = "Details about my home lab/automation setup."
date = "2019-01-01"
title = "Home Lab/Automation"

+++

This document is a work-in-progress. It might not be complete nor accurate.

My Home Lab journey started back in 2009 with a ReadyNAS; my Home Automation journey started in 2013 with Arduino Nanos.

I have lots of experience, but will never consider myself an expert. There is always something to learn about!

## Hardware, Architecture, & Operating System

### Networking

- UniFi Security Gateway
- UniFi AC-PRO
- (3) UniFi 8-port POE Switches

### Server

- (1) Xeon E3 1250v2, AMD64, Ubuntu 18.04

### Cameras

- (2) Hikvision Cubes
- (3) XiaoFang cameras running FangHacks

### Off-the-Shelf Hardware

- Linear HUSBZB1 - ZWave and Zigbee Stick
- Dome Water Shutoff Valve (ZWave)
- (7) SmartThings Water Leak Sensors (Zigbee)
- (3) GE Switches & Dimmer Switches (ZWave)
- (5) GE Link Bulbs (Zigbee)

## Containerization and Orchestration

- Docker - it's what all the cool kids are using, and really does make my server maintenance easier.
- Docker Swarm - while Kubernetes is totes cool, it's _zomg_ overkill for home use. Even Swarm is a bit overkill, but it's fairly minimal over what I was previously using (`docker-compose`).
  - I've jumped around from a cluster of Asus Tinkerboards, to mix a arm64/amd64 cluster, to a single amd64 "cluster".
    Hopefully will upgrade to something AMD in late 2020/early 2021.

## Software

### Network

- [Traefik](https://traefik.io/) - a http load balancer, obtains certificates (both external and internal) from Let's Encrypt, managed via labels within the stack definition.
- [Cloudflared](https://developers.cloudflare.com/1.1.1.1/dns-over-https/cloudflared-proxy/) - DNS over HTTPS; all outgoing udp-based dns traffic is blocked at the Unifi Security Gateway.
- [Wireguard](https://www.wireguard.com) - a secure connection into my home network.

### IoT/Home Automation

- [Mosquitto](https://mosquitto.org/) - a publish-subscribe-based messaging protocol; this runs most of my IoT infrastructure.
- [Home Assistant](https://home-assistant.io) - a home automation software hub; anything not integrated via MQTT is integrated via Home Assistant.
- [Grafana](https://grafana.org) - a data-visualization tool; draws pretty charts and graphs from the data within Influx
- [Node-Red](https://node-red.org) - a flow-based, automation tool; creates complex automations for Home Assistant. Home Assistant does have a yaml-based automation system (which works just fine, despite what Node-Red propoents say) it's just a lot more _fun_ to visualize and debug automations in Node-Red.
- [MySensors](https://mysensors.org) - a sensor framework for many different micro-controllers; I use it for many of my battery powered, custom IoT devices like my soil moisture sensor, and door sensors.
- [ESPHome](https://esphome.io) - a sensor framework for ESP8266 and ESP32 micro-controllers; I use it for most of my other custom IoT devices like my thermostat actuator, garage door actuator, fireplace actuator, etc.
- [Mysb](http://github.com/mannkind/mysb) - a mysensors bootloader to mqtt bridge process.
- [Seattlewaste2mqtt](http://github.com/mannkind/seattlewaste2mqtt) - a seattle waste collection schedule to mqtt bridge process.
- [Ipcamera2mqtt](https://github.com/mannkind/ipcamera2mqtt) - a seattle waste collection schedule to mqtt bridge process.
- [Denon2mqtt](https://github.com/mannkind/denon2mqtt) - a denon network receiver (telnet woohoo) to mqtt bridge process.
- [Darksky2mqtt](https://github.com/mannkind/darksky2mqtt) - a darksky to mqtt bridge process.
- [Wsdot2mqtt](https://github.com/mannkind/wsdot2mqtt) - a wsdot travel times to mqtt bridge process.
- [Unifi2mqtt](https://github.com/mannkind/unifi2mqtt) - a Unifi Controller device status to mqtt bridge process.
- [LitterRobot2mqtt](https://github.com/mannkind/litterrobot2mqtt) - a Litter Robot API to mqtt bridge process.

### Databases

- [InfluxDB](https://www.influxdata.com/) - a time-series datastore; Home Assistant publishes sensor changes into Influx
- [PostgreSQL](https://www.postgresql.org/) - a relational database that houses data for Miniflux and Home Assistant.

### Misc. Self-Hosted

- [Miniflux](https://miniflux.app) - an opinionated RSS feed reader; replaced Feedly and Google Reader before that.
- [Kanboard](https://kanboard.org) - project management software.
- [Gollum](https://github.com/gollum/gollum) - personal knowledge base.
- [UniFi Controller](https://www.ui.com/software/) - a unified controller for Ubiquiti UniFi hardware.
- [Borg Backup + Rclone](https://github.com/mannkind/borg-rclone-autobackup) - automated backups for all my servers, rclone'd to Backblaze B2.
