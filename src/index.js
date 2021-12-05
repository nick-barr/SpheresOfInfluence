const Spheres = require("./spheres");

document.addEventListener("DOMContentLoaded", function () {
    const mainCanv = document.querySelector(".canvasMain");
    const width = mainCanv.width = 900;
    const height = mainCanv.height = 450;
    
    const circle = mainCanv.getContext("2d");
    // //order of operations are important. Need to define the arc before filling it. Stroke will close whatever this is defining

    //single circle
        // circle.beginPath();
        // circle.arc(100, 100, 5, 0, 2*Math.PI);
        // circle.fillStyle = "red";
        // circle.fill();
        // circle.stroke;

    //many circles
    // for (let i = 0; i < 300; i++){
    //     circle.beginPath();
    //     circle.arc(Math.random() * 600, Math.random() * 300, 5, 0, 2*Math.PI);
    //     circle.fillStyle = "green";
    //     circle.fill();
    //     circle.stroke;
    // }

    function Circ(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;

        this.draw = function() {
            circle.beginPath();
            circle.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
            circle.fillStyle = "blue";
            circle.fill();    
        }

        this.update = function() {
            if (this.x + this.radius > width || this.x - this.radius < 0) this.dx = -this.dx;
            if (this.y + this.radius > height || this.y - this.radius < 0) this.dy = -this.dy;
    
            this.x += this.dx;
            this.y += this.dy;

            this.draw();
        }
    }
    
    const circleArray = [];

    for (let i = 0; i < 50; i++){
        let radius = Math.random() * 20;
        let x = Math.random() *  (width - radius * 2) + radius;
        let y = Math.random() * (height - radius * 2) + radius
        let dx = (Math.random() - 0.5) * 5;
        let dy = (Math.random() - 0.5) * 5;
        circleArray.push(new Circ(x, y, dx, dy, radius));
    }
    // let dx = Math.ceil(Math.random() * 199) * (Math.round(Math.random()) ? 1 : -1) / 10;
    // let dy = Math.ceil(Math.random() * 199) * (Math.round(Math.random()) ? 1 : -1) / 10;
    

    function animate () {
        requestAnimationFrame(animate);
        circle.clearRect(0, 0, innerWidth, innerHeight);
        
        circleArray.forEach(el =>
            el.update()
            );

    }

    animate ();



});