import Sphere from './spheres.js';

export default class Simulation {
    constructor (canvas) {
        this.canvas = canvas;
    }
}

    Simulation.prototype.runCovid = function (arr) {
        arr.forEach(el => {el.updateCovid(arr)});
    }
    
    Simulation.prototype.runPolitics = function (arr) {
        arr.forEach(el => {el.updatePoliticalParties(arr)});
    }
    
    Simulation.prototype.runIdeas = function (arr) {
        arr.forEach(el => {el.updateIdeas(arr)});
    }

    Simulation.prototype.spheres = function(total = 120) {
        const sphereArray = [];

        function distance(x1, y1, x2, y2) {
            const xDist = x2 - x1;
            const yDist = y2 - y1;

            return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
        }
        
        for (let i = 0; i < total; i++){

            let radius = 7;
            let x = Math.random() *  (this.canvas.width - radius * 2) + radius;
            let y = Math.random() * (this.canvas.height - radius * 2) + radius;
            let dx = (Math.random() - 0.5) * 2.5;
            let dy = (Math.random() - 0.5) * 2.5;

            if (i !== 0) {
                for (let j = 0; j < sphereArray.length; j++) {
                    if (distance(x, y, sphereArray[j].x, sphereArray[j].y) - radius * 2 < 0) {
                        x = Math.random() *  (this.canvas.width - radius * 2) + radius;
                        y = Math.random() * (this.canvas.height - radius * 2) + radius;

                        j = -1;
                    }
                }
            }

            sphereArray.push(new Sphere(x, y, dx, dy, radius, this.canvas));
        }
        return sphereArray;
    }
    
    Simulation.prototype.covidSphereUpdate = function (arr) {
        arr[0].color = "firebrick";
        arr[0].dx = 2;
        arr[0].dy = 2;
        setTimeout(arr[0].recover.bind(arr[0]), 10000);
    }

    Simulation.prototype.quarantineSphereUpdate = function (arr) {
        arr.forEach(el => {
            if (el !== arr[0] && Math.random() * 100 < 90) {
                el.dx = 0;
                el.dy = 0;
            }
        })
        this.covidSphereUpdate(arr);
    }

    Simulation.prototype.politicsSphereUpdate = function (arr) {
        arr[0].color = "darkred";
        arr[0].radius = 30;
        arr[1].color = "darkblue";
        arr[1].radius = 30;
    }

    Simulation.prototype.ideaSphereUpdate = function(arr) {
        arr.forEach(el => {
            el.radius = Math.random() * 10 + 5});
    }
