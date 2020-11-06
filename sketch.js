var red1,red2,red3;
var ground1;
var paper1;
var dustbin;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbin=loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

		
	


	engine = Engine.create();
	world = engine.world;

	paper1=new ball2(100,650);
	ground1=new ground2(400,height-10,800,20);
	red1=new Dustbin(580,630,10,100);
	red2=new   Dustbin(700,630,10,100);
	red3=new  Dustbin(640,675,115,10)
	//dustbin=new Dustbin(640,675,115,10)

	
  
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine)
  background("white");
  paper1.display();
  ground1.display();
  red1.display();
  red2.display();
  red3.display();

 imageMode(CENTER)
image(dustbin,640,620,140,130)
 

}

//function keyPressed() {
//	if (keyCode===RIGHT_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on
//	 Body.applyForce(paper1,{x:paper1.position.x,y:paper1.position.y})
 //}
   //}

   function keyPressed()
   {
	if (keyCode===RIGHT_ARROW) 
	{
		//Body.applyForce(paper1.body,paper1.body.position,{x:10.5,y:-5})
		Body.applyForce(paper1.body,paper1.body.position, {x:120,y:-120});
	}
   }
   

   