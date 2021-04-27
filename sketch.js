const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1;
var ground, box2;
var ground;
function setup() {
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(150, 10, 70, 80);
    box2 = new Box(120, 60, 70, 80);
    ground = new Ground(200, 300, 400, 20)
}

function draw() {
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
}