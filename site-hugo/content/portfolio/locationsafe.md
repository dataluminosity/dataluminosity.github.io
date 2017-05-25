+++
#image = "img/portfolio/gravity-paper.jpg"
showonlyimage = false
date = "2016-11-05T19:44:32+05:30"
title = "LocationSafe"
draft = false
weight = 2
+++

First design and implementation of a privacy module built into the GPSD daemon.

Joshua Joy, Minh Le, Mario Gerla


<!--more-->

Today, mobile data owners lack consent and control over the release and utilization of their location data. Third party applications continuously process and access location data without data owners granular control and without knowledge of how location data is being used. The proliferation of GPS enabled IoT devices will lead to larger scale abuses of trust.

In this paper we present the first design and implementation of a privacy module built into the GPSD daemon. The GPSD daemon is a low-level GPS interface that runs on GPS enabled devices. The integration of the privacy module ensures that data owners have granular control over the release of their GPS location. We describe the design of our privacy module integration into the GPSD daemon.

![GPSD-flow](/img/locationsafe/flow.png)

[Source](https://github.com/data-luminosity/gpsd)

[arXiv](https://arxiv.org/abs/1606.09605)

[PDF](http://dl.acm.org/citation.cfm?id=2987365&CFID=766300381&CFTOKEN=20512866)

[PPT](http://nrlweb.cs.ucla.edu/publication/slides/883/locationsafe.key)

[Media](https://motherboard.vice.com/en_us/article/researchers-want-to-give-the-internet-of-things-tighter-location-privacy-control)
