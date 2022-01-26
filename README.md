Spheres of Influence: Background
================================

This data simulation is meant to visualize the virality of ideas and interactions between people. As social beings, the extent that we reach one another is typically larger than expected. This simluation ultimately aims to show how our daily decisions affect our surrounding environment, in other words, our Sphere of Influence.

[a link](https://nick-barr.github.io/SpheresOfInfluence/)

Functionality & MVPs
====================

Choosing a scenario

In order to run a successful simulation, visitors must take the following actions:

1. Ensure no there is no movement on the canvas. If there is, use the Pause / Slowdown button until all movement has stopped on the canvas.
2. Select a scenario.
3. Press the Start / Speed Up button to begin scenario. Continue to press to speed up movement and use the Pause / Slowdown to reverse speed. 

The simulation that runs within the canvas uses an array of sphere objects with unique properties to demonstrate one of four given scenarios. Spheres use collision detection to "bounce" off of the boundaries of the canvas and other spheres. Once a collision occurs, conditionals manipulate the attributes of the colliding spheres. 

Scenario 1: COVID-19

The COVID-19 base scenario begins with a single sphere that is "infected" with a setTimeout to "recover" after 10,000 milliseconds. During the time it is "infected", collisions with other spheres will cause the "healthy" spheres to change to "infected" and begin its' own setTimeout until recovered. This scenario can be used to observe how quickly COVID-19 can spread to other individuals.

Scenario 2: COVID-19: Lockdown

Iterating off the previous scenario, a quarantine function runs through the sphere array to set velocity attribes to of 90% of the objects available to 0. This in turn demonstrates how limiting the movement of individuals during a lockdown can limit how far and quickly the virus spreads.

Scenario 3: Political Influence

Here we show how political parties gather support through interactions with "citizens" on the canvas. Two spheres representing opposing parties begin as red & blue radii ~4x larger than the spheres on the page. Once a citizen has joined a party, they no longer are able to switch to the other side. Political parties have enormous influence on their governed population as parties build and propogate ideas central to their political agenda.

Features

* Choose between different scenarios
* Start and reset the simulation
* Speed up / slowdown simulation
* Live tracker counting the status/affiliation of objects in the canvas (healthy/infected/recovered etc.)
* Collision logic & setTimeout properties

Wireframes
==========

![alt text](https://github.com/nick-barr/jsProjectCovid/blob/main/src/assets/wireframes/wireframev1.png)

Technologies, Libraries, APIs
=============================

This project will be implemented with the following technologies:

* The Canvas API to render a space and manage objects
* Webpack and Babel to bundle and transpile the source JavaScript code
* npm to manage project dependencies

Bonus Features
==============

To be included time permitting:

* Create a running area graph of the current simluation state (for scenarios 1-3)
* Add / draw structures to limit the movement of objects
* Change the % of objects moving vs static
* Maintain a log of status events
* Change the virality of objects (not all objects change when collision occurs)
* Toggle the immunized status of individual objects
