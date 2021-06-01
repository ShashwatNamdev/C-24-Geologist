
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var stone;
var rubber;
var iron;
var sandP1;
var sandP2;
var sandP3;
var sandP4;
var sandP5;
function preload(){	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
    
    
	//Create the Bodies Here.
    hammer = new Hammer(400,200,100,40);
    ground = new Ground(400,700,800,40);
    stone = new Stone(400,200,80,80);
    rubber = new Rubber(300,500,50);
    iron = new Iron(500,500,100,50);
    sandP1 = new SandParticles(200,400,25);
    sandP2 = new SandParticles(200,380,25);
    sandP3 = new SandParticles(200,360,25);
    sandP4 = new SandParticles(200,340,25);
    sandP5 = new SandParticles(200,320,25);
	  Engine.run(engine);
    
}

function draw() {
//   rectMode(CENTER);
  background("lightBlue");
  Engine.update(engine);

  console.log(iron.x);
  console.log(iron.y);

  hammer.display();
  ground.display();
  stone.display();
  rubber.display();
  iron.display();
  sandP1.display();
  sandP2.display();
  sandP3.display();
  sandP4.display();
  sandP5.display();
  drawSprites();
}



