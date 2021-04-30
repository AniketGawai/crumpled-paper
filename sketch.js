
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbin,dustbin	
var world;






function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
    paperObject=new Paper(200,450,70);
	groundObject=new Ground(width/2,670,width,20);
	


//dustbin.addImage(dustbinImage);
//dustbin.scale = 0.45;


dustbin = new Dustbin(902,505,10,120);



	Engine.run(engine);
  
}


function draw() {
  
  background(0);
Engine.update(engine);

//(mouseX=","+mouseY,200,200)


  groundObject.display();
  dustbinObj.display();
  paperObject.display();
  dustbin.display();
  
  drawSprites();
}


function keyPressed(){

	if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:92,y:-92})

	}
}






