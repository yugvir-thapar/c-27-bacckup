var hanger;
var bob1,bob2,bob3,bob4,bob5
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint =Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here
  hanger=new Hanger(400,50,800,20)
	bob1=new Bob(200,300,50)
	bob2=new Bob(300,300,50)
	bob3=new Bob(400,300,50)
	bob4=new Bob(500,300,50)
  bob5=new Bob(600,300,50)
  chain1= new Chain(bob1.body,hanger.body)
  chain2= new Chain(bob2.body,hanger.body)
  chain3= new Chain(bob3.body,hanger.body)
  chain4= new Chain(bob4.body,hanger.body)
  chain5= new Chain(bob5.body,hanger.body)
}


function draw() {
  background(255);
  Engine.run(engine);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  hanger.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
  drawSprites();
 
}


