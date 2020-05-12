const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var platform;
var ball, chain;
var stick1, stick2;


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;       

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 355, 300, 70);

    box1 = new Box(700,320,70,70);
    box2 = new Box1(700,320,70,70);
    box3 = new Box2(700,320,70,70);
    box4 = new Box3(700,320,70,70);
    box5 = new Box4(700,320,70,70);

    box6 = new Box(810,320,70,70);
    box7 = new Box1(810,320,70,70);
    box8 = new Box2(810,320,70,70);
    box9 = new Box3(810,320,70,70);
    box10 = new Box4(810,320,70,70);

    ball = new Bird(100,200);

    chain = new SlingShot(ball.body,{x: 200, y:200});
}

function draw(){

    background(170, 86, 255);
     
    fill(211, 255, 255);
    text("Shoot the box at the tower to make it fall", 550, 20);
    text(mouseX, 110, 50);
    text(mouseY, 110, 60);
    Engine.update(engine);

    ground.display();
    platform.display();
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    ball.display();
   
    chain.display();    

}

function mouseDragged() {

 Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
    
}             

function mouseReleased() {

    chain.Fly();
} 