import Simulation from './simulation.js';

document.addEventListener("DOMContentLoaded", function () {

    function viewWidthCalc(width){
        let subWidth = width * .35;
        let calcWidth = width;

        switch(subWidth) {
            case subWidth >= 400:
              subWidth = 400;
              return calcWidth - subWidth;
            case subWidth <= 350:
              subWidth = 350;
              return calcWidth - subWidth;
            default:
              return calcWidth - subWidth;
          }
    }
    
    const canvasMain = document.querySelector(".canvasMain");
    const ctx = canvasMain.getContext("2d");    
    // canvasMain.width = window.innerWidth * .7;
    canvasMain.width = viewWidthCalc(innerWidth);
    canvasMain.height = window.innerHeight * .6;
    let sim = new Simulation(canvasMain);
    let sphereArray = sim.spheres();

    let uninfected = 0
    let infected = 0
    let recovered = 0
    let simVersion = 0;
    let simStart = null;

    function animate() {
        let requestID = requestAnimationFrame(animateCovid);
        sim.runCovid(sphereArray);   
        cancelAnimationFrame(requestID);
    }    

    animate();
    
    function animateCovid() {
        
        
        let requestID = requestAnimationFrame(animateCovid);
        // console.log(requestID)
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        sim.runCovid(sphereArray);   


        // if (sphereArray.every(el => el.color !== "firebrick")) reset();

        // function reset() {
        //     document.getElementById("active").id = "inactive";
        //     cancelAnimationFrame(requestID)
        // }
        
        document.getElementById("simReset").onclick = function() {
            cancelAnimationFrame(requestID);
            document.getElementById("active").id = "inactive";
            simStart = null;
        };    
        
        statsC();
    }    

    function statsC () {
        uninfected = sphereArray.filter(el => el.color === 'lightgray').length;
        infected = sphereArray.filter(el => el.color === 'firebrick').length;
        recovered = sphereArray.filter(el => el.color === 'lightgreen').length;

        document.getElementById("uninfected").innerHTML = "HEALTHY: " + uninfected;
        document.getElementById("infected").innerHTML = "POSITIVE: " + infected;
        document.getElementById("recovered").innerHTML = "RECOVERED: " + recovered;
    };

    function animatePolitics() {
        let requestID = requestAnimationFrame(animatePolitics);
        // console.log(requestID)
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        sim.runPolitics(sphereArray);   
             
        document.getElementById("simReset").onclick = function() {
            cancelAnimationFrame(requestID);
            document.getElementById("active").id = "inactive";
            simStart = null;
        };    
        
        statsP();
    }    

    function statsP () {
        uninfected = sphereArray.filter(el => el.color === 'blue').length;
        infected = sphereArray.filter(el => el.color === 'firebrick').length;
        recovered = sphereArray.filter(el => el.color === 'lightgray').length;

        document.getElementById("uninfected").innerHTML = "BLUE TEAM: " + uninfected;
        document.getElementById("infected").innerHTML = "RED TEAM: " + infected;
        document.getElementById("recovered").innerHTML = "NEUTRAL: " + recovered;
    };

    function animateIdeas() {
        let requestID = requestAnimationFrame(animateIdeas);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
        sim.runIdeas(sphereArray);   
             
        document.getElementById("simReset").onclick = function() {
            cancelAnimationFrame(requestID);
            document.getElementById("active").id = "inactive";
            simStart = null;
        };    
        
    }

    function scenarioButtonStyler(scenario){
        let scenarios = ['covid', 'quarantine', 'political', 'ideas']

        scenarios.forEach(scen => {
            if (scen === scenario) {
                document.getElementById(scenario).className = `${scenario} active`
            } else {
                document.getElementById(scen).className = `${scen}`
            }
        });
    }



    document.getElementById("simStart").onclick = function() {
        if (!simStart){
            simVersion();
            document.getElementById("inactive").id = "active";
            document.getElementById("simStart").className = "";
            simStart = true;
        }
    };

    document.getElementById("covid").onclick = function() {
        document.getElementById("description").innerHTML = "The speed that COVID-19 has spread is beyond what most would imagine. Observe how patient zero affects the rest of the population."

        scenarioButtonStyler("covid");
        sphereArray = sim.spheres();
        sim.covidSphereUpdate(sphereArray);
        simVersion = animateCovid;
    };

    document.getElementById("quarantine").onclick = function() {
        document.getElementById("description").innerHTML = "Lockdowns imposed by governments help reduce the spread of COVID-19, but is not possible for extended periods of time."

        scenarioButtonStyler("quarantine");
        sphereArray = null;
        sphereArray = sim.spheres();
        sim.quarantineSphereUpdate(sphereArray);
        simVersion = animateCovid;
    };
    
    document.getElementById("political").onclick = function() {
        document.getElementById("description").innerHTML = "Political parties have enormous influence on their governed population as parties build and propogate ideas central to their political agenda."

        scenarioButtonStyler("political");
        sphereArray = sim.spheres();
        sim.politicsSphereUpdate(sphereArray);
        simVersion = animatePolitics;
    };

    document.getElementById("ideas").onclick = function() {
        document.getElementById("description").innerHTML = "There is a diversity of ideas around us. As we share our perspectives with one another, we leave an impression that can spread, morph, and reach beyond what we've intitally thought possible."

        scenarioButtonStyler("ideas");
        sphereArray = sim.spheres(200);
        sim.ideaSphereUpdate(sphereArray);
        simVersion = animateIdeas;

        document.getElementById("uninfected").innerHTML = "";
        document.getElementById("infected").innerHTML = "";
        document.getElementById("recovered").innerHTML = "";
    };

    document.getElementById("covid").click();

});