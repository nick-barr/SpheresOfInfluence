import Sphere from './spheres.js';
import Simulation from './simulation.js';


document.addEventListener("DOMContentLoaded", function () {
    const canvasMain = document.querySelector(".canvasMain");
    canvasMain.width = innerWidth * .7;
    canvasMain.height = innerHeight * .6;
    const ctx = canvasMain.getContext("2d");    
    let sim = new Simulation(canvasMain);
    let sphereArray = sim.spheres();

    let uninfected = 0
    let infected = 0
    let recovered = 0
    let immunized = 0

    function animate () {
        let requestID = requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        sim.run(sphereArray);
        if (sphereArray.every(el => el.color === "firebrick")) cancelAnimationFrame(requestID);
        if (sphereArray.every(el => el.color !== "firebrick")) cancelAnimationFrame(requestID);
        
        uninfected = sphereArray.filter(el => el.color === 'lightgray').length;
        infected = sphereArray.filter(el => el.color === 'firebrick').length;
        recovered = sphereArray.filter(el => el.color === '#6ed877').length;

        // console.log(uninfected);
        // console.log(infected);
        // console.log(recovered);

        stats();
    }    

    function stats () {
        document.getElementById("uninfected").innerHTML = "Uninfected: " + uninfected;
        document.getElementById("infected").innerHTML = "Infected: " + infected;
        document.getElementById("recovered").innerHTML = "Recovered: " + recovered;
    }

    // animate ()
    ;
    document.getElementById("simStart").onclick = function() {
        animate()
    };
    document.getElementById("simReset").onclick = function() {
        // sim = new Simulation(canvasMain);
        sphereArray = sim.spheres();
    };
    document.getElementById("quarantine").onclick = function() {
        console.log("what")
    };


});