// How to create a blueprint 

class Box {

    constructor(x, y, width, height) {

        var options = {
            restitution: 0.96
        }
        this.box = Bodies.rectangle(x, y, width, height, options);
        this.w = width;
        this.h = height;
        World.add(world, this.box);
    }


    display() {
        var pos = this.box.position;
        var angle = this.box.angle
        push();

        rectMode(CENTER);
        angleMode(RADIANS)
        translate(pos.x, pos.y);
        rotate(angle);
        fill('red');
        rect(0, 0, this.w, this.h);

        pop();
    }
}