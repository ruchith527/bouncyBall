class Ground {

    constructor(x, y, width, height) {

        var options = {
            isStatic: true

        }
        this.ground = Bodies.rectangle(x, y, width, height, options);
        this.w = width;
        this.h = height;
        World.add(world, this.ground);
    }
    display() {
        var pos = this.ground.position;
        rectMode(CENTER);
        fill('orange');
        rect(pos.x, pos.y, this.w, this.h);

    }

}
