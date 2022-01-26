import { particleCollision } from "./collision.js"

export default class Sphere {
    constructor (x, y, dx, dy, radius, canvas) {
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        this.color = "lightgray";
        this.canvas =  canvas;
        this.mass = 1;
    }
}

    Sphere.prototype.draw = function() {
        const sphere = this.canvas.getContext("2d");
        sphere.beginPath();
        sphere.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        sphere.fillStyle = this.color;
        sphere.fill();    
    }

    Sphere.prototype.updateCovid = function(arr) {
        function distance(x1, y1, x2, y2) {
            const xDist = x2 - x1;
            const yDist = y2 - y1;

            return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
        }

        for (let i = 0; i < arr.length; i++) {
            if (this === arr[i]) continue;
            if (distance(this.x, this.y, arr[i].x, arr[i].y) - this.radius - arr[i].radius < 0) {
                particleCollision(this, arr[i]);
                
                if (this.color === "firebrick" && arr[i].color === "lightgray") {
                    arr[i].color = "firebrick";
                    setTimeout(arr[i].recover.bind(arr[i]), 10000);
                }
                if (this.color === "lightgray" && arr[i].color === "firebrick") {
                    this.color = "firebrick";
                    setTimeout(this.recover.bind(this), 10000);
                }
            }
        }

        if (this.x + this.radius > this.canvas.width || this.x - this.radius < 0) this.dx = -this.dx;
        if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }

    Sphere.prototype.recover = function () {
        this.color = "lightgreen";
    }

    Sphere.prototype.updatePoliticalParties = function(arr) {
        function distance(x1, y1, x2, y2) {
            const xDist = x2 - x1;
            const yDist = y2 - y1;

            return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
        }

        for (let i = 0; i < arr.length; i++) {
            if (this === arr[i]) continue;
            if (distance(this.x, this.y, arr[i].x, arr[i].y) - this.radius - arr[i].radius < 0) {
                particleCollision(this, arr[i]);
                if (this.radius === 30 && arr[i].radius === 30) continue;
                if (this.color === "darkred" && arr[i].color !== "darkred") {
                    arr[i].color = "firebrick";}
                if (this.color !== "darkred" && arr[i].color === "darkred") {
                    this.color = "firebrick";}
                if (this.color === "darkblue" && arr[i].color !== "darkblue") {
                    arr[i].color = "blue";}
                if (this.color !== "darkblue" && arr[i].color === "darkblue") {
                    this.color = "blue";}
            }
        }

        if (this.x + this.radius > this.canvas.width || this.x - this.radius < 0) this.dx = -this.dx;
        if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) this.dy = -this.dy;

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }

    Sphere.prototype.updateIdeas = function(arr) {
        const COLORS = ["firebrick", "darkcyan", "green", "lime", "olive", "aquamarine", "bisque", "coral", "deeppink", "gold", "lightcoral", "lightgreen", "lightgray", "lightslategray", "springgreen", "tomato", "slateblue"];
        
        function distance(x1, y1, x2, y2) {
            const xDist = x2 - x1;
            const yDist = y2 - y1;

            return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
        } 

        for (let i = 0; i < arr.length; i++) {
            // if (arr[i].x + arr[i].radius > this.canvas.width
            //     || arr[i].x - arr[i].radius < 0
            //     || arr[i].y + arr[i].radius > this.canvas.height
            //     || arr[i].y - arr[i].radius < 0) 
            //     {arr[i].color = COLORS[Math.floor(Math.random()*COLORS.length)];}

            if (this === arr[i]) continue;
            if (distance(this.x, this.y, arr[i].x, arr[i].y) - this.radius - arr[i].radius < 0) {
                particleCollision(this, arr[i]);
                let thisIdea = COLORS[Math.floor(Math.random()*COLORS.length)];
                this.color = thisIdea;
                arr[i].color = thisIdea;
                if (Math.random() * 10 > 5) {
                    arr[i].radius += .2;
                } else {
                    arr[i].raidus -= .2;
                }
                // if (this.color === "firebrick" && arr[i].color !== "firebrick") {
                //     arr[i].color = "firebrick";}
                // if (this.color !== "firebrick" && arr[i].color === "firebrick") {
                //     this.color = "firebrick";}
                // if (this.color === "blue" && arr[i].color !== "blue") {
                //     arr[i].color = "blue";}
                // if (this.color !== "blue" && arr[i].color === "blue") {
                //     this.color = "blue";}
            }
        }

        if (this.x + this.radius > this.canvas.width || this.x - this.radius < 0) this.dx = -this.dx;
        if (this.y + this.radius > this.canvas.height || this.y - this.radius < 0) this.dy = -this.dy;

        if (this.x + this.radius > this.canvas.width 
            || this.x - this.radius < 0
            || this.y + this.radius > this.canvas.height 
            || this.y - this.radius < 0) {
            this.color = COLORS[Math.floor(Math.random()*COLORS.length)]};
        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }

    Sphere.prototype.covidSphereUpdate = function (arr) {
        arr[0].color = "firebrick";
        setTimeout(arr[0].recover.bind(arr[0]), 10000);
    }

