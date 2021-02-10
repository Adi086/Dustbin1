
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground1=new Ground(400,690, 800, 10);
    dustbin1=new Dustbin(700, 680, 80, 10);
    dustbin2=new Dustbin(655, 645, 10, 80);
    dustbin3=new Dustbin(745, 645, 10, 80);
    paper1=new Paper(200, 600, 20);
    
   

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper1.display();

  
}
function keyPressed(params) {
  if (keyCode=== UP_ARROW) {
    Matter.Body.applyForce(paper1.body,paper1.body.position,{x:49, y:-49});
  }
  drawSprites();
 
}



