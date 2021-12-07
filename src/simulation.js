import Sphere from './spheres.js';

export default function Simulation(canvas) {
    this.canvas = canvas;
}

    Simulation.prototype.spheres = function() {
        const sphereArray = [];

        function distance(x1, y1, x2, y2) {
            const xDist = x2 - x1;
            const yDist = y2 - y1;

            return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
        }
        
        for (let i = 0; i < 200; i++){

            // let radius = Math.random() * 5 + 5;
            let radius = 5;
            let x = Math.random() *  (this.canvas.width - radius * 2) + radius;
            let y = Math.random() * (this.canvas.height - radius * 2) + radius;
            let dx = (Math.random() - 0.5) * 5;
            let dy = (Math.random() - 0.5) * 5;

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
    
    
    Simulation.prototype.run = function (arr) {
        
        arr.forEach(el => {el.update(arr)});
        
        const COLORS = ["firebrick", "darkcyan", "green", "lime", "olive", "aquamarine", "bisque", "coral", "deeppink", "gold", "lightcoral", "lightgreen", "lightgray", "lightslategray", "springgreen", "tomato", "slateblue"]

        arr.forEach(el => {
            if (el.x + el.radius > this.canvas.width
                || el.x - el.radius < 0
                || el.y + el.radius > this.canvas.height
                || el.y - el.radius < 0) 
                {el.color = COLORS[Math.floor(Math.random()*COLORS.length)];}
            }
        );   
    }

    // window.addEventListener("click", function(event) {
    //     const canvasEl = document.getElementById('gameView');
    //     const ctx = canvasEl.getContext('2d');
    //     ctx.fillStyle = '#000';
    //     ctx.fillRect(event.clientX, event.clientY, 10, 10);
    // }) /// just adds a box when it clicks TEST FOR WHERE I AM CLICKING?

    // fetch('url/?')
