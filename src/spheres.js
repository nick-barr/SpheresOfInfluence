export default function Sphere(x, y, dx, dy, radius, canvas) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = "lightgray";
    this.canvas =  canvas;

    this.draw = function() {
        const sphere = this.canvas.getContext("2d");
        sphere.beginPath();
        sphere.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        sphere.fillStyle = this.color;
        sphere.fill();    
    }

    this.update = function() {
        if (this.x + this.radius > this.canvas.width || this.x - this.radius < 0) this.dx = -this.dx;
        if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}