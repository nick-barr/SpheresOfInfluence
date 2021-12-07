
    export const resolveCollision = (particle, otherParticle) => {
        const xVelocityDiff = particle.dx - otherParticle.dx;
        const yVelocityDiff = particle.dy - otherParticle.dy;

        const xDist = otherParticle.x - particle.x;
        const yDist = otherParticle.y - particle.y;

        function rotate(velocityx, velocityy, angle) {
            const rotatedVelocities = {
                x: velocityx * Math.cos(angle) - velocityy * Math.sin(angle),
                y: velocityx * Math.sin(angle) + velocityy * Math.cos(angle)
            };
    
            return rotatedVelocities;
        }

        if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

            const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

            const m1 = particle.mass;
            const m2 = otherParticle.mass;

            const u1 = rotate(particle.dx, particle.dy, angle);
            const u2 = rotate(otherParticle.dx, otherParticle.dy, angle);

            const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
            const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

            const vFinal1 = rotate(v1.x, v1.y, -angle);
            const vFinal2 = rotate(v2.x, v2.y, -angle);

            particle.dx = vFinal1.x;
            particle.dy = vFinal1.y;

            otherParticle.dx = vFinal2.x;
            otherParticle.dy = vFinal2.y;


        }
    }