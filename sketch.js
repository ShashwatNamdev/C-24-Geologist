
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var ground;
var stone;

function preload(){	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;
    
    
	//Create the Bodies Here.
    hammer = new Hammer(400,200,100,40,PI/2);
    ground = new Ground(400,700,800,40);
    stone = new Stone(300,600,80,80,PI/2);

	  Engine.run(engine);
    
}

function draw() {
//   rectMode(CENTER);
  background("lightBlue");
  Engine.update(engine);

  console.log(stone.body.position.x);
  console.log(stone.body.position.y);

  hammer.display();
  ground.display();
  stone.display();
  
  drawSprites();
}



