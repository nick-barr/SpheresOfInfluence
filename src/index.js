import Sphere from './spheres.js';

document.addEventListener("DOMContentLoaded", function () {
    const canvasMain = document.querySelector(".canvasMain");
    canvasMain.width = 900;
    canvasMain.height = 550;
    const width = canvasMain.width;
    const height = canvasMain.height;
    const sphere = canvasMain.getContext("2d");
    
    // const circle = canvasMain.getContext("2d");

    // function Circ(x, y, dx, dy, radius, style) {
    //     this.x = x;
    //     this.y = y;
    //     this.dx = dx;
    //     this.dy = dy;
    //     this.radius = radius;
    //     this.color = "gray";
    //     this.style = 

    //     this.draw = function() {
    //         circle.beginPath();
    //         circle.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
    //         circle.fillStyle = this.color;
    //         circle.fill();    
    //     }

    //     this.update = function() {
    //         if (this.x + this.radius > width || this.x - this.radius < 0) this.dx = -this.dx;
    //         if (this.y + this.radius > height || this.y - this.radius < 0) this.dy = -this.dy;
    
    //         this.x += this.dx;
    //         this.y += this.dy;

    //         this.draw();
    //     }
    // }
    
    // const circleArray = [];
    
    // for (let i = 0; i < 10; i++){
    //     let radius = Math.random() * 5 + 5;
    //     // let radius = 10;
    //     let x = Math.random() *  (width - radius * 2) + radius;
    //     let y = Math.random() * (height - radius * 2) + radius
    //     let dx = (Math.random() - 0.5) * 5;
    //     let dy = (Math.random() - 0.5) * 5;
    //     debugger
    //     circleArray.push(new Circ(x, y, dx, dy, radius));
    // }

    const sphereArray = [];
    // console.log(spheres)
    for (let i = 0; i < 500; i++){
        let radius = Math.random() * 5 + 5;
        // let radius = 10;
        let x = Math.random() *  (width - radius * 2) + radius;
        let y = Math.random() * (height - radius * 2) + radius
        let dx = (Math.random() - 0.5) * 5;
        let dy = (Math.random() - 0.5) * 5;
        
        sphereArray.push(new Sphere(x, y, dx, dy, radius, canvasMain));
    }
    
    // function animate () {
    //     requestAnimationFrame(animate);
    //     circle.clearRect(0, 0, innerWidth, innerHeight);
    //     circleArray.forEach(el => el.update());

        // const COLORS = ["firebrick", "darkcyan", "green", "lime", "olive", "aquamarine", "bisque", "coral", "deeppink", "gold", "lightcoral", "lightgreen", "lightgray", "lightslategray", "springgreen", "tomato", "slateblue"]
        // const COLORS = ["firebrick", "darkcyan", "green"]

        // circleArray.forEach(el => {
            // if (el.x + el.radius > width) {el.color = "red"}
            // else if (el.x - el.radius < 0) {el.color = "green"}
            // else if (el.y + el.radius > height) {el.color = "blue"}
            // else if (el.y - el.radius < 0) {el.color = "grey"}

    //         if (el.x + el.radius > width
    //             || el.x - el.radius < 0
    //             || el.y + el.radius > height
    //             || el.y - el.radius < 0) 
    //             {el.color = COLORS[Math.floor(Math.random()*COLORS.length)];}
    //         }
    //     );
    // }

    function animate () {
        requestAnimationFrame(animate);
        sphere.clearRect(0, 0, innerWidth, innerHeight);
        sphereArray.forEach(el => el.update());

        // const COLORS = ["firebrick", "darkcyan", "green", "lime", "olive", "aquamarine", "bisque", "coral", "deeppink", "gold", "lightcoral", "lightgreen", "lightgray", "lightslategray", "springgreen", "tomato", "slateblue"]
        const COLORS = ["firebrick", "darkcyan", "green"]

        sphereArray.forEach(el => {
            // if (el.x + el.radius > width) {el.color = "red"}
            // else if (el.x - el.radius < 0) {el.color = "green"}
            // else if (el.y + el.radius > height) {el.color = "blue"}
            // else if (el.y - el.radius < 0) {el.color = "grey"}

            if (el.x + el.radius > width
                || el.x - el.radius < 0
                || el.y + el.radius > height
                || el.y - el.radius < 0) 
                {el.color = COLORS[Math.floor(Math.random()*COLORS.length)];}
            }
        );
    }

    animate ();

});