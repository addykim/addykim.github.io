---
layout: project
title: Fingerprint Authenticator
logo: 
date: November 2015
github-url: clover-authenticator
tags: 
- android
- hackathon
- award
---
Clover Network Hackathon during November 5 of 2015 with Narbe as my mentor. We received honorable mention for using web sockets. I worked primarily on getting the Android side of the project to work using Samsung Pass for fingerprint authentication.

<h3>The Goal</h3>
Build a website/server ("ACME website") and an iOS/Android app (called "Authenticator") that works as follows: Browse to ACME website on your laptop. Simply browsing to that page launches the Authenticator app. Users use Touch ID/Imprint on the app. User is magically logged in on the ACME site.

<img src="https://raw.githubusercontent.com/addykim/clover-authenticator/master/img/server-require-authenticate.png" height="326" width="600">

<h3>Authenticating</h3>

At this point a push notification is sent through Google Cloud Messaging and opens the app without the user having to manually do so.
<img src="https://raw.githubusercontent.com/addykim/clover-authenticator/master/img/server-authenticating.png" height="326" width="600"><img src="https://github.com/addykim/clover-authenticator/raw/master/img/android-authenticating.png" height="500" width="300">

<h3>Success</h3>

This occurs if the fingerprint ID matches what is already stored on the phone.
<img src="https://raw.githubusercontent.com/addykim/clover-authenticator/master/img/server-success.png" height="326" width="600"><img src="https://github.com/addykim/clover-authenticator/raw/master/img/android-success.png" height="500" width="300">

<h3>Failure</h3>

This occurs if the user cancels the fingerprinting process or does not have the appropriate fingerprint.

<img src="https://raw.githubusercontent.com/addykim/clover-authenticator/master/img/server-fail.png" height="326" width="600"><img src="https://github.com/addykim/clover-authenticator/raw/master/img/android-failed.png" height="500" width="300">

There's more information on the <a href="http://github.com/addykim/clover-authenticator">readme</a>.
