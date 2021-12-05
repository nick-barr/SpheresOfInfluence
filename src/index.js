const Spheres = require("./spheres");

document.addEventListener("DOMContentLoaded", function () {
    const canvasMain = document.querySelector(".canvasMain");
    const width = canvasMain.width = 900;
    const height = canvasMain.height = 450;
    const circle = canvasMain.getContext("2d");

    function Circ(x, y, dx, dy, radius) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = "green";

        this.draw = function() {
            circle.beginPath();
            circle.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
            circle.fillStyle = this.color;
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

    for (let i = 0; i < 400; i++){
        let radius = Math.random() * 5 + 5;
        let x = Math.random() *  (width - radius * 2) + radius;
        let y = Math.random() * (height - radius * 2) + radius
        let dx = (Math.random() - 0.5) * 5;
        let dy = (Math.random() - 0.5) * 5;
        circleArray.push(new Circ(x, y, dx, dy, radius));
    }

    function animate () {
        requestAnimationFrame(animate);
        circle.clearRect(0, 0, innerWidth, innerHeight);
        circleArray.forEach(el => el.update());

        const COLORS = ["firebick", "darkcyan"]

        circleArray.forEach(el => {
            if (el.x + el.radius > width) {el.color = "red"}
            else if (el.x - el.radius < 0) {el.color = "green"}
            else if (el.y + el.radius > height) {el.color = "blue"}
            else if (el.y - el.radius < 0) {el.color = "grey"}
            // if (el.x + el.radius > width
            //     || el.x - el.radius < 0
            //     || el.y + el.radius > height
            //     || el.y - el.radius < 0) 
            //     {el.dx *= 1.5
            //     el.dy *= 5}
            }
        );
    }

    animate ();

});