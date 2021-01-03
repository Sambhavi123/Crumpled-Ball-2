
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbin1;
var world;
var paper1,
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	dustbin1 = new dustbin(200,300);
	paper1 = new paper(200,300);
	
	


	//Create the Bodies Here.


	Engine.run(engine);
  
}

function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  dustbin1.display();
  paper1.display();
  
  drawSprites();
 
}




