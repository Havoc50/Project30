const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, ground, box;
var polygon, slingshot;

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1600,800);
    engine = Engine.create();
    world = engine.world;

    //ground
    ground1 = new Ground(800, height, 1650, 20);
    ground2 = new Ground(800, height/1.5, 400, 20);
    
    //layer1
    box1 = new Box(650, 500, 50, 50);
    box2 = new Box(700, 500, 50, 50);
    box3 = new Box(750, 500, 50, 50);
    box4 = new Box(800, 500, 50, 50);
    box5 = new Box(850, 500, 50, 50);
    box6 = new Box(900, 500, 50, 50);
    box7 = new Box(950, 500, 50, 50);

    //layer2
    box8 = new Box(700, 450, 50, 50);
    box9 = new Box(750, 450, 50, 50);
    box10 = new Box(800, 450, 50, 50);
    box11 = new Box(850, 450, 50, 50);
    box12 = new Box(900, 450, 50, 50);

    //layer3
    box13 = new Box(750, 400, 50, 50);
    box14 = new Box(800, 400, 50, 50);
    box15 = new Box(850, 400, 50, 50);

    //layer4
    box16 = new Box(800, 350, 50, 50);
    
    polygon = new Polygon(200, 410);
    slingshot = new Slingshot(polygon.body, {x:200, y:400});

}

function draw(){
    background("lightblue");
    Engine.update(engine);

    strokeWeight(2);
    ground1.display();
    ground2.display();

    strokeWeight(2);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    strokeWeight(2);
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    strokeWeight(2);
    box13.display();
    box14.display();
    box15.display();
    
    strokeWeight(2);
    box16.display();

    strokeWeight(2);
    polygon.display();
    slingshot.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
        
    }
}