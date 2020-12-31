
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Diameter= 60
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	ball1=new Ball(200,100,30)
	ball2=new Ball(250,100,30)
	ball3=new Ball(300,100,30)
	ball4=new Ball(350,100,30)
	ball5=new Ball(400,100,30)
	ground1=new Ground(300,350,400,20)
	//rope1=new Rope(ball1.body,ground1.body,)
	//rope2=new Rope(ball2.body,ground1.body,-ball2Diameter*2,0)
	//rope3=new Rope(ball3.body,ground1.body,-ball3Diameter*2,0)
//rope4=new Rope(ball4.body,ground1.body,-ball4Diameter*2,0)
	//rope5=new Rope(ball5.body,ground1.body,-ball5Diameter*2,0)
	
	

}


function draw() {
  rectMode(CENTER);
  background(0);
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  ground1.display()
  drawSprites();
 
}



