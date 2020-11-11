
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bottom,left,right;
var ground,bin,paper,slingShot;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	bin=new Bin();
	
ground=new Ground(600,790,1200,20);
paper=new Paper(100,780,40);
	Engine.run(engine);
	slingShot = new Slingshot(paper.body,{x:150,y:500});

  
}


function draw() {
  rectMode(CENTER);
  background(255);
  bin.display();
  ground.display();
paper.display();
slingShot.display();
 
 
}
function mouseDragged(){
    Matter.Body.setPosition(paper.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
    slingShot.fly();
}


