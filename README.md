[Spheres of Influence Live Site](https://nick-barr.github.io/SpheresOfInfluence/)

# Spheres of Influence: Background


This data simulation is meant to visualize the virality of ideas and interactions between people. As social beings, the extent that we reach one another is typically larger than expected. This simluation ultimately aims to show how our daily decisions affect our surrounding environment, in other words, our Sphere of Influence.

![landing page](https://github.com/nick-barr/jsProjectCovid/blob/main/src/assets/soi_thumb.png)

# Technologies

* Javascript
* HTML
* CSS, SCSS
* The Canvas API
* Node Package Manager
* Webpack and Babel

This project was built using vanilla Javascript, Canvas, HTML, and CSS. Canvas is the main visual on the page that renders the space and objects for this demonstration. Webpack and Babel is used to to bundle and transpile the source JavaScript code while npm is used to manage project dependencies.

# Features & Usage

## Useage
In order to run a successful simulation, visitors must take the following actions:

1. Ensure no there is no movement on the canvas. If there is, use the Pause / Slowdown button until all movement has stopped on the canvas.
2. Select a scenario.
3. Press the Start / Speed Up button to begin scenario. Continue to press to speed up movement and use the Pause / Slowdown to reverse speed. 

The simulation that runs within the canvas uses an array of sphere objects with unique properties to demonstrate one of four given scenarios. Spheres use collision detection to "bounce" off of the boundaries of the canvas and other spheres. Once a collision occurs, conditionals manipulate the attributes of the colliding spheres. 

## Features
* Ability to choose between scenarios
* Start and reset the simulation
* Speed up / slowdown simulation
* Collision logic & setTimeout properties

![simulation demo](https://github.com/nick-barr/jsProjectCovid/blob/main/src/assets/soi_covid_demo.gif)

### Scenario 1: COVID-19

The COVID-19 base scenario begins with a single sphere that is "infected" with a setTimeout to "recover" after 10,000 milliseconds. During the time it is "infected", collisions with other spheres will cause the "healthy" spheres to change to "infected" and begin its' own setTimeout until recovered. This scenario can be used to observe how quickly COVID-19 can spread to other individuals.

### Scenario 2: COVID-19: Lockdown

Iterating off the previous scenario, a quarantine function runs through the sphere array to set velocity attribes to of 90% of the objects available to 0. This in turn demonstrates how limiting the movement of individuals during a lockdown can limit how far and quickly the virus spreads.

### Scenario 3: Political Influence

Here we show how political parties gather support through interactions with "citizens" on the canvas. Two spheres representing opposing parties begin as red & blue radii ~4x larger than the spheres on the page. Once a citizen has joined a party, they no longer are able to switch to the other side. Political parties have enormous influence on their governed population as parties build and propogate ideas central to their political agenda.

### Scenario 4: Ideas

Lastly, ideas are represented here in different sizes and colors representing the weight and diversity of ideas around us. As we share our perspectives with one another, we leave an impression that can spread, morph, and cultivate beyond our reach.

# Future Implementations
* Running area graph of the current simluation state
* Ability to create structures to limit the movement of objects
* Adjustable slider to change % of objects from moving vs static
* Add a log of status events
* Change the virality of objects (not all objects change when collision occurs)
* Toggle the immunized status of individual objects
