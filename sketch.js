
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

 var Bob1,Bob2,Bob3,Bob4,Bob5;
var rope1;
var Roof;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 1000);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Bob1 = new bob(600,400,20,20);
	Bob2 = new bob(660,400,20,20);
	Bob3 = new bob(720,400,20,20);
	Bob4 = new bob(780,400,20,20);
	Bob5 = new bob(840,400,20,20);
	Roof = new roof(700,200,500,50);
	rope1 = new Rope(Bob1.body,Roof.body,0,-175);
	rope2 = new Rope(Bob2.body,Roof.body,0,-175);
	rope3 = new Rope(Bob3.body,Roof.body,0,-175);
	rope4 = new Rope(Bob4.body,Roof.body,0,-175);
	rope5 = new Rope(Bob5.body,Roof.body,0,-175);

	Engine.run(engine);
  
}


function draw() {
	background("white");
  rectMode(CENTER);
  Engine.update(engine);
  Roof.display();
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(Bob1.body,Bob1.body.position,{x:-500,y:-100})
	}
}



