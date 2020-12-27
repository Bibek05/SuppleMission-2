var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground

var wall_1;
var wall_2;
var wall_3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



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

	groundSprite=createSprite(200,690,1500,10);
	groundSprite.shapeColor=color("white")


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.6, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);


	wall_1 = Bodies.rectangle(440,650,20,20 , {isStatic:true});
	World.add(world,wall_1);
	

	wall_2 = Bodies.rectangle(240,650,20,20 , {isStatic:true}); 
	World.add(world,wall_2);

	wall_3 = Bodies.rectangle(350,680,20,20 , {isStatic:true})
	World.add(world,wall_3);
	
  
}


function draw() {
  

  background(0);
  
  Engine.update(engine);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  rectMode(CENTER);
  rect(wall_1.position.x,wall_1.position.y,20,100);
  rect(wall_2.position.x,wall_2.position.y,20,100);
  rect(wall_3.position.x,wall_3.position.y,200,20);

  

  




 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

	Matter.Body.setStatic(packageBody,false);
    
  }
}



