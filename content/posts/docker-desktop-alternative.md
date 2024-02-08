---
title: "Docker Desktop Alternative"
date: "2022-04-19T04:29:19-08:00"
---

Per Docker's new subscription info

> Our Docker Subscription Service Agreement includes a change to the terms for Docker Desktop. Docker Desktop remains free for small businesses (fewer than 250 employees AND less than $10 million in annual revenue), personal use, education, and non-commercial open-source projects.
> It requires a paid subscription (Pro, Team, or Business), for as little as $5 a month, for professional use in larger enterprises.
> The effective date of these terms is August 31, 2021. There is a grace period until January 31, 2022 for those that will require a paid subscription to use Docker Desktop.
> The Docker Pro and Docker Team subscriptions now include commercial use of Docker Desktop. The existing Docker Free subscription has been renamed Docker Personal. No changes to Docker Engine or any other upstream open-source Docker or Moby project

**Servers**

I've been running my home automation software in containers using Docker for quite some time now. Perhaps it's time to look towards Kubernetes. 
The complexity of k8s annoys me, but mayyybe something like k3s might be a little easier to use at home while still being *kubernetes*.

**Desktop/Laptops**

I'm really not sure what to do here. I could keep using Docker Desktop, but I imagine that may become an issue with employers in the future.
Perhaps something like Podman or Colima will become viable soon. Right now, either seem to be supported by DevContainers or at least not DevContainers as implemented by Visual Studio Code.
I'll have to keep an eye out on them... I bet they'll rapidly improve.
