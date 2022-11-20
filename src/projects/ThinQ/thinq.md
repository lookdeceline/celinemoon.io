---
title: "ThinQ for Smartwatch"
date: "2021-01-03"
intro: "An IoT application for smartwatches that sends push notifications based on the users' location and activity."
featuredImage: ./thinq-featured-new.jpg
backgroundColor: '#F9DB74'
type: "app"
text: "COMPANY WORK"
path: "ThinQ-Smartwatch"
publish: true
order: 2
---

### About The Project
---
While I worked as a research engineer at LG, I designed and prototyped LG ThinQ app for smartwatches. Working closely with the team’s designer and engineers, I solved the problem of low user engagement rate of the prevsiouly existing ThinQ for smartphone.

### What is ThinQ for Smartwatch?
---
LG's ThinQ is an app that acts a central hub of LG’s smart home ecosystem, allowing users to remotely control and monitor their smart home appliances throuh cloud computing.

ThinkQ originally only supported access through smartphones. To improve the user engagement rate which only marked 36% on smartphones, I led the taskforce to extend ThinkQ to wearable devices. I leveraged the embedded sensors that provide accurate user context-recognition, and convenient usability of smartwatch. At the end of the project, I successfully convinced the leadership of the group to kickstart the service on smartwatch.

### Understanding The Key Problem
---
ThinQ’s problem was low user engagement rate.

The main source of low user engagement rate was that users were simply not used to remotely control the home appliances.
As a result, the smartphone the app was useful only if the users consciously remembered to remotely control their home appliances using their smartphones.
* E.g., A user who left her home AC on on her way out to work is able to remotely turn it off via ThinQ, but only if she somehow noticed by herself that her home AC was still on.

<div class="projectImage" style="width:500px; max-width: 100%; margin-left: auto; margin-right: auto;">
    <img src="./user-bubble.jpg">
</div>

### UX Design and Technical Solution
---
With such insight, I both designed and implemented a prototype for a new feature dubbed prior notification on smartwatch.

To tackle this problem, the app needs to timely notify the user to remotely control her home appliances.
* An example of a timely notification: A notification prompting the user to turn off her home AC while she is still out from home.

However, deciding the timeliness of a notification is tricky.
Simply monitoring the state of each home appliance is not always enough.


#### Key Takeaways For Timely Triggering Notifications
Compare the following two scenarios, for instance:
* **scenario 1)** A user has been at home and has intentionally left the AC on for 4 hours straight because it is a particularly hot day.
    * In this scenario, because the user intended to leave the AC on for long hours, it is not helpful to notify the user to turn it off just because the AC has been on for long.
* **scenario 2)** As in scenario 1, a user’s home AC has been left on for 4 hours, but this time the user is at work and had actually intended to turn it off on her way out, but forgot to.
    * In this scenario, because the AC is on even when the user is not home, it is helpful to notify the user to remotely turn off the AC.

Likewise, notifications should be triggered by not only the state of a home appliance, but also the state of the user (i.e., user context).


### Design and Technical Solution
---
With such insight, I both designed and implemented a prototype for a new feature dubbed Prior Notification on a smartwatch.

#### What Is Prior Notification?
Prior Notification is a notification sent on the user’s smartwatch to timely prompt the user to remotely control their home appliances. Users can simply tap on a button in the notifiction screen to do so.
<div class="projectImage" style="width:32%; max-width: 150px; margin-left: auto; margin-right: auto;">
    <img src="./prior-noti.jpg">
</div>

#### How Does It Work?
Prior Notification tracks the user context and the state of home appliances.
When the user context and home appliances’ state satisfy our pre-defined conditions, the Prior Notification is triggered to the user’s smartwatch. 

<div class="projectImage" style="max-width: 500px; margin: 30px auto;">
    <img src="./how-works.jpg">
</div>

**User context** includes user’s current location and current activity. **User’s Location** is constantly updated through a GPS inside a smartwatch. **User’s Activity** is recognized by machine learning-based Human Activity Recognition that leverages accelerometer, gyroscope, and pedometer, embedded in a smartwatch.

**Home Appliance State** includes the power and the battery state of each home appliance that is registered to the user’s ThinQ. **Power State** refers to if the appliance is connected to power. **Battery State** refers to battery charge status, if battery is required for the appliance to operate. The app sends a network request to AWS to get updates on power and battery state.


#### Why Implement on Smartwatch?
Smartwatch apps can leverage various sensor data that reveal more personal and pervasive information of the user compared to smartphones, and this is essential for user context recogntion.<br/>
e.g., workout recogntion, hand gesture-recognition, heart rate sensing, etc.

Moreover, smartwatch notifications channel various user interactions with just a single tap on a button on the notification screen. On the other hand, smartphone notifications require several depths of interactions to trigger the target action. This is because a smartwatch is designed to induce quick, on-the-fly user interactions, whereas a smartphone is designed for more complicated interactions.

### System Architecture
---
The system pipeline for tracking user context and monitoring home appliance state is visualized in the below figure. Most of the system’s logic runs in the background state, except for when the prior notification is triggered. We also optimized the system by triggering activity recognition and networking to a cloud server only when a major location change is detected.

<div class="projectImage" style="width:100%; margin: 30px auto;">
    <img src="./sys-arch.jpg">
</div>

### Final Output, Impacts
---

<!-- #### Demo
Here is a quick demo of remotely controlling a robot cleaner through ThinQ Apple Watch.

<iframe style="width:100%; max-width: 560px; height: 315px; margin-bottom:30px;" src="https://www.youtube.com/embed/4sFUbaKua5A?start=3" title="ThinQ for Apple Watch Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> -->

#### Screenshots
Here are the screenshots from ThinQ on Apple Watch. 
<div class="projectImage" style="width: 700px; max-width: 100%; margin: 30px auto;">
    <img src="./output.jpg">
</div>

#### Thoughts, Impacts
Implicit interactions enable seamless experience; it is less explicit on the surface, but much more essential for more pervasive computing.

At the end of the project, I was given a chance to present this prototype to LG Electronics ThinQ Group. 
I was able to successfully convince the leadership to kickstart the ThinQ service for smartwatches. 
The project is under progress.

<!-- <div class="projectImage" style="width:426px; max-width: 100%; margin: 30px auto;">
    <img src="./presenting.png">
    <p style="text-align:center; color:#545454; margin-top: 8px; font-size: 14px; line-height: 18px; font-weight: 300;">
    Me presenting the prototype to the LG Electronics ThinQ group's leadership.
    </p>
</div> -->

