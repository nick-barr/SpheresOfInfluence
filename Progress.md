Started with introductory text. Since this is a simulation, I wanted the purpose of this project to be made known.

I used inspiration from asteroids and pathfinder to pull this together.

(Saturday 12/04/21)
- created a main canvas. Used a selector to 
- figured out how to get a circle to appear with a resource I found online. I needed to use fill and note what the fill color should be. The order of operations also mattered.
- Was able to create many static circles using a for loop
- Found a tutorial that helped with creating the animate function. Animations are basically rerendering circles and moving their position from their previous position by a set and consistent amount. An animate function needs to be created and invoked which ends up being like a recursive function.
- To make things more dynamic, I created a constructor function for creating new circles. The circle attributes were then made into placeholders so that I could fill them in with built in Math functions to randomize their starting position and "movement speed". 
- Border logic was adding by reversing the x y velocity when it hit the wall. Needed to add the radius to the equation to make sure the ball didn't go through the walls.
- In the same vein, to make sure that balls don't spawn within the walls, you needed to subtract the radius from each of the sides of the walls.
- Lastly for the day, needed to use a for loop to put newly constructed circles into a saved array. This array would later be used int he aimate function to run the update function which would change the xy coordinates for each circle object and redraw the circle at the new coordinates. After the update was made, the animate function would clear the canvas and run through the array again to render all the circles in the new spot.

(Sunday 12/05/21)
- Played around with different attributes (radius, dx/dy, colors) within the forEach loop that updates based on hitting the borders of the canvas 
- Updated the canvas so that it dynamically changes when refreshing with the screen size

(Monday 12/06/21)
- Separated out modules into Sphere and Simulation. Updated to ES6 syntax for import / export 
- Added canvas to Sphere to fix radius issue.
- Spheres will no longer spawn on top of each other.
- Collision detection added ensuring individual spheres will not bump into each other.

(Tuesday 12/07/21)

- Use a counter based on the color of the sphere that updated with the animation FPS. Did not work at scale.
- Added setTimeout for infected spheres to recover
- Simulations end when all balls become infected or recovered
- Added three scenarios; politics, covid, ideas
- Added non-functioniing options file
- Added CSS elements (buttons, left nav bar to house all interactive elements)

(Wednesday 12/08/21)

- Updated CSS further
- Split animate function, simulation run, and sphere update functions into their own functions.
- Updated onclick buttons to match scenarios and used selectors to change certain animations. 
- Added start/stop simulation functions.
- Split out specific sphereArray modifications to match scenario being run.