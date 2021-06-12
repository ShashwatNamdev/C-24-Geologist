const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground;
var stone, iron,rubber,hammer;
var sandP1;
var sandP2;
var sandP3;
var sandP4;
var sandP5;
var sandP6;
var sandP7;
var sandP8;
var sandP9;
var sandP10;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20)
    
    stone = new Stone(700,320,100,100);
    iron = new Iron(300,350);
    rubber=new Rubber(900,450,70);
    hammer = new Hammer(10,100);

    sandP1 = new Sand(505,450,10);
    sandP2 = new Sand(510,450,10);
    sandP3 = new Sand(515,450,10);
    sandP4 = new Sand(520,450,10);
    sandP5 = new Sand(525,450,10);
    sandP6 = new Sand(515,445,10);
    sandP7 = new Sand(520,445,10);
    sandP8 = new Sand(525,445,10);
    sandP9 = new Sand(530,445,10);
    sandP10 = new Sand(535,445,10);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone.display();
    ground.display();
    iron.display();
    rubber.display();
    hammer.display();
    sandP1.display();
    sandP2.display();
    sandP3.display();
    sandP4.display();
    sandP5.display();
    sandP6.display();
    sandP7.display();
    sandP8.display();
    sandP9.display();
    sandP10.display();
}