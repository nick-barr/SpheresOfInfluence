Spheres of Influence: Background
==========

This data simulation is meant to visualize anything viral can spread. As social beings, the extent that we reach one another is typically larger than one would expect. This simluation aims to ultimately help with visualizing how our daily decisions affect the environment around us. Note that this is not a political statement but a demonstration of our spheres of influence.

The first iteration of this project will focus on how quickly a virus can spread. There will several moving objects on a given canvas. All objects will start out as neutral. One object will be added that represents patient zero. When this object collides with other objects, it will influence that object by either infecting it or not. After a period of time, the status of influenced objects will change to immunized or dead.

Functionality & MVPs
====================

With this simluation, users will be able to:

* Start and reset the simulation
* Add labeled markers to mark patient zero, yourself, and other persons of interest
* Change the % of objects moving vs static
* Toggle the immunized status of individual objects

Using widget like trackers, users will also be able to:

* View a live tracker counting the status of objects in the canvas (not infected/immunized/dead, etc.)
* Maintain a log of status events

Wireframes
==========

![alt text](https://github.com/nick-barr/jsProjectCovid/blob/main/src/assets/wireframes/wireframev1.png)

Technologies, Libraries, APIs
=============================

This project will be implemented with the following technologies:

* The Canvas API to render a space and manage objects
* Webpack and Babel to bundle and transpile the source JavaScript code
* npm to manage project dependencies
* TBD: matter.js & D3.js

Implementation Timeline
=======================

Friday Afternoon & Weekend: Setup project, including getting webpack up and running. Get canvas to show up on the screen, and spend time getting comfortable with the Canvas API. Create different src files to figure out how the simluation will come to life. Rendered a moving ball on the canvas.

Monday: Dedicate this day toward implementing the underlying logic of interactions between objects. Ensure that the first part of objects once they collide actually happens. 

Tuesday: Do the features & styling

Wednesday: Finish implementing user features and focus on styling, as well as implementing the different color schemes and nav links.

Thursday Morning: Deploy to GitHub pages. If time, rewrite this proposal as a production README.

Bonus Features
==============

To be included time permitting:

* Add / draw structures to limit the movement of objects
* Change the speed of moving objects
* Change the virality of objects (not all objects change when collision occurs)
* View a running area graph of the current simluation state


/*
Personal Notes
demonstrate collisions
demonstrate movement
demonstrate collision interaction
demonstrate collision properties
demonstrate settimeouts
demonstrate property selectors
*/
