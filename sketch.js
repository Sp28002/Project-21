const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine,world

var ball;
var radius = 20;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world; 

	ground = new Ground (width/2,670,width,20);
	leftSide = new Ground (1100,600,20,120);
	rightSide = new Ground(1300,600,20,120);

	//Create the Bodies Here.
	 var ball_options={
		isStatic: false,
		restitution:0.3,
		friction:0,
		density:1.2

	}
	ball = Bodies.circle (200,100, radius/2, ball_options); 
	World.add(world,ball);

	Engine.run(engine);
	ellipseMode(RADIUS);
  
}


function draw() {
  rectMode(CENTER);
  background(0); 
   
  ellipse(ball.position.x,ball.position.y,radius,radius);
  
 



 ground.show()
 leftSide.show()
 rightSide.show()
  
  drawSprites();
 
} 

function keyPressed(){
if (keyCode === DOWN_ARROW) {
	Matter.Body.applyForce(ball,{x:0,y:3},{x:13,y:0});
}
}






