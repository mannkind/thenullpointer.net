---
title: "Adventures in NixOS"
date: "2020-05-04T19:44:16-07:00"
---

My server is indispensable; it's at the center of nearly all the technology in the house. Those in the know would consider it a _pet_ rather than _cattle_, and that's a problem. If something goes wrong I need to be able to fix it as quickly as possible; hopefully just by rebooting the machine.

But that's never the case is it? Things like Ansible, Docker, and good backups got me quite far, but there's always an unexpected issue due to an upgrade, a configuration tweak, something missed since the last time the server rebooted, etc.

## Erase your darlings

One day I come across [Erase your darlings](https://grahamc.com/blog/erase-your-darlings) by Graham Christensen. The article really resonated with me. My server is long running, collects state, and is generally a pain in the ass when things go wrong. 

Two key things piqued my interest:

1. A ZFS-based root filesystem; one that is erased at every boot.
1. A declarative configuration of the system.

After playing with NixOS in a virtual machine for awhile, I decided that maybe NisOS could probably replace Ubuntu on my server. This wouldn't be the first time I swapped out the operating system; back in 2014-ish I replaced FreeNAS with Ubuntu LTS.

There was just one tiny little problem: my server is headless and I don't own a compatible monitor.

## Doing it live

Ok. I don't have a monitor. How can I proceed? Can I start the installation _blind_ and then complete it via ssh? Yes, yes I can (after multiple tests in a VM).

I prepared for this blind installation as best I knew how:

* I checked the motherboard manual in advance for how to access the boot menu.
* I wrote an `init.sh` script to partition the disk and setup the required mounts.
* I created the appropriate `configuration.nix` and `hardware-configuration.nix` files.
* I practiced and refined the installation procedure multiple times in a VM.

I'd love to tell you it went off without a hitch, but it didn't. Despite multiple user-errors, I have to say that it didn't go as badly as it could have. I won't bore you with details of my struggle, but I will tell you that my server was back running in around 30 minutes, and within 45 minutes was starting its docker containers.


## The Ephemeral Future

I'm obviously still a NixOS noob, but I'm enjoying a new found confidence in my server. 🤞🏼 

* All host changes require deliberate changes to configuration files and I can revert the configuration at any time.
* _Most_ service state changes are captured by automatic ZFS snapshots or at least by daily Borg backups to Backblaze.
* I'm following the recommendation on _Erase your darlings_ to reboot the machine often; I've setup a systemd-timer to reboot the machine every two weeks.

Here is a link to the [init.sh](https://gist.github.com/mannkind/07b21461061e599e1372b2bf8c46a337) script I used, in case anyone is interested.























