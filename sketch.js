const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var engine, world;
var box1;
var rectangleBase;
var rectangleSide1;
var rectangleSide2;

var recat

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
	 rectangleBase=createSprite(width/2,650,200,20);
	 rectangleBase.shapeColor=color("red");

	 rectangleSide1=createSprite(310,600,20,100);
	 rectangleSide1.shapeColor=color("red");

	 rectangleSide2=createSprite(490,600,20,100);
	 rectangleSide2.shapeColor=color("red");

	engine = Engine.create();
	world = engine.world;

	
	
	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	
	rectangleBase=Bodies.rectangle(width/2,650,200,20, {isStatic:true});
	World.add(world, rectangleBase);

	rectangleSide1=Bodies.rectangle(310,600,20,100, {isStatic:true});
	World.add(world, rectangleSide1);

	rectangleSide2=Bodies.rectangle(490,600,20,100, {isStatic:true});
	World.add(world, rectangleSide2);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Matter.Body.setStatic(packageBody,false);
    
  }
}



