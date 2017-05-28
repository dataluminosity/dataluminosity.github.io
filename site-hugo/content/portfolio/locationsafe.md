+++
#image = "img/portfolio/gravity-paper.jpg"
showonlyimage = false
date = "2016-11-05T19:44:32+05:30"
title = "LocationSafe"
draft = false
weight = 2

authors=["Joshua Joy", "Minh Le", "Mario Gerla"]
url_pdf = "http://dl.acm.org/citation.cfm?id=2987365&CFID=766300381&CFTOKEN=20512866"
url_arxiv = "https://arxiv.org/abs/1606.09605"
url_ppt = "http://nrlweb.cs.ucla.edu/publication/slides/883/locationsafe.key"
url_code = "https://github.com/data-luminosity/gpsd"
url_media = ["https://motherboard.vice.com/en_us/article/researchers-want-to-give-the-internet-of-things-tighter-location-privacy-control"]

abstract_short = "First design and implementation of a privacy module built into the GPSD daemon."

abstract="Today, mobile data owners lack consent and control over the release and utilization of their location data. Third party applications continuously process and access location data without data owners granular control and without knowledge of how location data is being used. The proliferation of GPS enabled IoT devices will lead to larger scale abuses of trust. In this paper we present the first design and implementation of a privacy module built into the GPSD daemon. The GPSD daemon is a low-level GPS interface that runs on GPS enabled devices. The integration of the privacy module ensures that data owners have granular control over the release of their GPS location. We describe the design of our privacy module integration into the GPSD daemon."
+++

<!--more-->

![GPSD-flow](/img/locationsafe/flow.png)

