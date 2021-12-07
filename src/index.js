import Sphere from './spheres.js';
import Simulation from './simulation.js';


document.addEventListener("DOMContentLoaded", function () {
    const canvasMain = document.querySelector(".canvasMain");
    canvasMain.width = 900;
    canvasMain.height = 550;
    
    const sim = new Simulation(canvasMain);
    const sphereArray = sim.spheres();


    const ctx = canvasMain.getContext("2d");
    // const width = canvasMain.width;
    // const height = canvasMain.height;
    // const sphereArray = [];
    
    // for (let i = 0; i < 200; i++){
    //     let radius = Math.random() * 15 + 5;
        // let radius = 10;
    //     let x = Math.random() *  (width - radius * 2) + radius;
    //     let y = Math.random() * (height - radius * 2) + radius
    //     let dx = (Math.random() - 0.5) * 5;
    //     let dy = (Math.random() - 0.5) * 5;
        
    //     sphereArray.push(new Sphere(x, y, dx, dy, radius, canvasMain));
    // }

    function animate () {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, innerWidth, innerHeight);
    //     sphereArray.forEach(el => el.update());
        sim.run(sphereArray);
    //     const COLORS = ["firebrick", "darkcyan", "green", "lime", "olive", "aquamarine", "bisque", "coral", "deeppink", "gold", "lightcoral", "lightgreen", "lightgray", "lightslategray", "springgreen", "tomato", "slateblue"]

    //     sphereArray.forEach(el => {
    //         if (el.x + el.radius > width
    //             || el.x - el.radius < 0
    //             || el.y + el.radius > height
    //             || el.y - el.radius < 0) 
    //             {el.color = COLORS[Math.floor(Math.random()*COLORS.length)];}
    //         }
    //     );
    }

    animate ();

});