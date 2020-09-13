
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paper;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(150,250,5);


	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  Engine.update(engine);
  background(0);
  
  paper.display();
  keyPressed();
  drawSprites();
 
}

function keyPresssed()
{
  if(keyCode === UP_ARROW)
  {
    Matter.Body.applyForce();
  }
}

