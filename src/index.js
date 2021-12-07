import Sphere from './spheres.js';
import Simulation from './simulation.js';


document.addEventListener("DOMContentLoaded", function () {
    const canvasMain = document.querySelector(".canvasMain");
    canvasMain.width = 900;
    canvasMain.height = 550;
    const ctx = canvasMain.getContext("2d");    
    const sim = new Simulation(canvasMain);
    const sphereArray = sim.spheres();
    
    function animate () {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        sim.run(sphereArray);
    }

    animate ();

});