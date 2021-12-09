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
    let simVersion = console.log("Choose a scenario!");

    function animate() {
        let requestID = requestAnimationFrame(animateCovid);
        console.log(requestID)
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        sim.runCovid(sphereArray);   
             
        if (sphereArray.every(el => el.color === "firebrick")) cancelAnimationFrame(requestID);
        if (sphereArray.every(el => el.color !== "firebrick")) cancelAnimationFrame(requestID);

        document.getElementById("simReset").onclick = function() {
            cancelAnimationFrame(requestID);
        };    
    }    

    animate();

    
    function animateCovid() {
        let requestID = requestAnimationFrame(animateCovid);
        console.log(requestID)
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        sim.runCovid(sphereArray);   
             
        // if (sphereArray.every(el => el.color === "firebrick")) cancelAnimationFrame(requestID);
        if (sphereArray.every(el => el.color !== "firebrick")) reset();


        function reset() {
            document.getElementById("active").id = "inactive";
            cancelAnimationFrame(requestID)
        }
        
        document.getElementById("simReset").onclick = function() {
            cancelAnimationFrame(requestID);
            document.getElementById("active").id = "inactive";
        };    
        
        stats();
    }    

    function stats () {
        uninfected = sphereArray.filter(el => el.color === 'lightgray').length;
        infected = sphereArray.filter(el => el.color === 'firebrick').length;
        recovered = sphereArray.filter(el => el.color === 'lightgreen').length;

        document.getElementById("uninfected").innerHTML = "HEALTHY: " + uninfected;
        document.getElementById("infected").innerHTML = "POSITIVE: " + infected;
        document.getElementById("recovered").innerHTML = "RECOVERED: " + recovered;
    };

    function animatePolitics() {
        let requestID = requestAnimationFrame(animatePolitics);
        console.log(requestID)
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        sim.runPolitics(sphereArray);   
             
        document.getElementById("simReset").onclick = function() {
            cancelAnimationFrame(requestID);
            document.getElementById("active").id = "inactive";
        };    
        
        statsP();
    }    

    function statsP () {
        uninfected = sphereArray.filter(el => el.color === 'blue').length;
        infected = sphereArray.filter(el => el.color === 'firebrick').length;
        recovered = sphereArray.filter(el => el.color === 'lightgray').length;

        document.getElementById("uninfected").innerHTML = "TEAM BLUE: " + uninfected;
        document.getElementById("infected").innerHTML = "TEAM RED: " + infected;
        document.getElementById("recovered").innerHTML = "SWINGERS: " + recovered;
    };
    function animateIdeas() {
        let requestID = requestAnimationFrame(animateIdeas);
        console.log(requestID)
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        sim.runIdeas(sphereArray);   
             
        document.getElementById("simReset").onclick = function() {
            cancelAnimationFrame(requestID);
            document.getElementById("active").id = "inactive";
        };    
        
    }    



    document.getElementById("simStart").onclick = function() {
        simVersion();
        document.getElementById("inactive").id = "active";
    };

    document.getElementById("covid").onclick = function() {
        document.getElementById("description").innerHTML = "The speed that COVID-19 has spread is beyond what most would imagine. Observe how patient zero reaches the rest of the objects."

        sphereArray = sim.spheres();
        sim.covidSphereUpdate(sphereArray);
        simVersion = animateCovid;
    };

    document.getElementById("quarantine").onclick = function() {
        document.getElementById("description").innerHTML = "Lockdowns imposed by governments help reduce the spread of COVID-19 but this is not always possible."

        sphereArray = null;
        sphereArray = sim.spheres();
        sim.quarantineSphereUpdate(sphereArray);
        simVersion = animateCovid;
        
    };
    
    document.getElementById("political").onclick = function() {
        document.getElementById("description").innerHTML = "Political parties have enormous influence on their governed population as parties build and propogate on ideas central to their agenda."

        sphereArray = sim.spheres();
        sim.politicsSphereUpdate(sphereArray);
        simVersion = animatePolitics;
    };

    document.getElementById("ideas").onclick = function() {
        document.getElementById("description").innerHTML = "There is a diversity of ideas around us. As we share our perspectives with one another, we leave an impression that can spread, morph, and reach beyond what we've intitally thought possible."

        sphereArray = sim.spheres(200);
        sim.ideaSphereUpdate(sphereArray);
        simVersion = animateIdeas;

        document.getElementById("uninfected").innerHTML = "";
        document.getElementById("infected").innerHTML = "";
        document.getElementById("recovered").innerHTML = "";
    };

});