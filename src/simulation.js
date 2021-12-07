import Sphere from './spheres.js';

export default function Simulation(canvas) {
    this.canvas = canvas;
}

    Simulation.prototype.spheres = function() {
        const sphereArray = [];

        for (let i = 0; i < 200; i++){

            let radius = Math.random() * 5 + 5;
            // let radius = 10;
            let x = Math.random() *  (this.canvas.width - radius * 2) + radius;
            let y = Math.random() * (this.canvas.height - radius * 2) + radius;
            let dx = (Math.random() - 0.5) * 5;
            let dy = (Math.random() - 0.5) * 5;

            sphereArray.push(new Sphere(x, y, dx, dy, radius, this.canvas));
        }

        return sphereArray;
    }
    
    Simulation.prototype.run = function (arr) {
        
        arr.forEach(el => {el.update.call(el)});
        
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
