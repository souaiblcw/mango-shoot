
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var mango1, mango2, mango3, mango4, mango5;
var boyImage;
var stone1;
var tree1, treeImage;
var ground;
var elastic1;

function preload(){
boyImage = loadImage("Plucking mangoes/boy.png");
treeImage = loadImage("Plucking mangoes/tree.png")
}


function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400, 695, 800, 20);
	//tree1 = new Tree(650, 515, 350);
	mango1 = new Mango(560, 470, 40);
	mango2 = new Mango(610, 420, 40);
	mango3 = new Mango(670, 460, 40);
	mango4 = new Mango(750, 455, 40);
	mango5 = new Mango(700, 400, 40);
	stone1 = new Stone(56, 569, 40);
	elastic1 = new Elastic(stone1.body, {x:56, y:569});
	

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("turquoise");
  Engine.update(engine);

  imageMode(CENTER);
  image(boyImage, 100, 625, 150, 250); 
  image(treeImage, 650, 515, 350, 350);
  ground.display();
  //tree1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  stone1.display();
 elastic1.display();
 detectCollision(stone1, mango1);
 detectCollision(stone1, mango2);
 detectCollision(stone1, mango3);
 detectCollision(stone1, mango4);
 detectCollision(stone1, mango5);
  
  drawSprites();
 
}


function detectCollision(lstone,lmango){
	mangoBodyPosition = lmango.body.position;
	stone1BodyPosition = lstone.body.position;
	var distance = dist(stone1BodyPosition.x, stone1BodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
	if(distance<=lmango.radius+lstone.radius){
		Matter.Body.setStatic(lmango.body,false);
	}
}

function keyPressed(){
	if(keyCode===32){
		Matter.Body.setPosition(stone1.body, {x:235, y:420})
		elastic1.attach(stone1.body);
	}
}

function mouseDragged(){
	Matter.Body.setPosition(stone1.body, {x:mouseX, y:mouseY});
}

function mouseReleased(){
	elastic1.fly();
}
