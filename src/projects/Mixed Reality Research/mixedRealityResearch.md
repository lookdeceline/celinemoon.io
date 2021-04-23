---
title: "Life-Immersive MR Research"
date: "2020-09-21"
intro: "HCI Research on Mixed Reality system, implemented on iOS."
featuredImage: ./MR.png
backgroundColor: '#EFF5FA'
type: "research"
text: "HCI Research"
path: "MR-Research"
publish: true
---

### About The Research
---
- The goal of this research is to enable user interaction with real-world objects, while being inside the virtual reality, without taking off the goggles.
- More specifically, we aim to maximize the immersion of the virtual world, while also maximizing utility of using real objects.
- This research designs and implements a deep-learing based Mixed Reality(MR) system  (implemented on iOS), and tests the effectiveness of the system.
- I led this research as first author, while I was a research intern at [Human-centered Computer Systems Lab (HCS lab)](https://hcs.snu.ac.kr/research/Mixed%20Reality%20Systems) at Seoul National University (SNU).
- Work in progress. (Exact visuals and details omitted on this post.)

### Tech Stack
---
- iOS ARKit
- iOS SceneKit
- iOS Core Graphics

### My Role
---
- Designed the user interactions and the system pipeline, based on research on related literature.
- Using ARKit and SceneKit, created a virtual environment that replaces real-world objects with virtual 3D models, based on real size and 3D coordinates.
- Using Core Graphics, applied instance segmentation mask on each video frame, running at real-time 25 fps.
- Using Core Graphics, transformed the local 3D coordinates of real-world objects to global 3D coordinates.



<!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/4SZl1r2O_bY" frameborder="0" allowfullscreen></iframe> -->
