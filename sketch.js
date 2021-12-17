
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
const Body = Matter.Body;
var ground
var mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8
var tree
var tree
var stone
var boyImg
var slingshot

function preload()
{
	boyImg = loadImage("boy.png")
}

function setup() {
	createCanvas(1340, 700);


	engine = Engine.create();
	world = engine.world;

ground = new Ground(670,615,1400,50);
tree = new Tree(900,300,350,650);
mango1 = new Mango(900,250);
mango2 = new Mango(950,200);
mango3 = new Mango(950,50);
mango4 = new Mango(880,30);
mango5 = new Mango(800,200);
mango6 = new Mango(1050,250);
mango7 = new Mango(880,130);
mango8 = new Mango(1025,150);
stone = new Stone(500,600);
slingshot = new SlingShot(stone.body, {x:240,y:380});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

 
  
ground.display()
tree.display()
image(boyImg,300,500,200,500)
mango1.display()
mango2.display()
mango3.display()
mango4.display()
mango5.display()
mango6.display()
mango7.display()
mango8.display()
mango8.display()
stone.display()
slingshot.display()


 detectollision(stone,mango1)
detectollision(stone,mango2)
detectollision(stone,mango3)
detectollision(stone,mango4)
detectollision(stone,mango5)
detectollision(stone,mango6)
detectollision(stone,mango7)
detectollision(stone,mango8)



}


function mouseDragged(){

        Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingshot.fly();
}

function detectollision(lstone,lmango)
{ /*var collision = Matter.SAT.collides(lstone,lmango);
 if(collision.collided){ console.log("collided");
 Matter.Body.setStatic(lmango,false); }*/ 
mangoBodyPosition=lmango.body.position 
stoneBodyPosition=lstone.body.position 
var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y) 
//console.log(distance) // console.log(lmango.r+lstone.r) if(distance<=lmango.r+lstone.r) { //console.log(distance); Matter.Body.setStatic(lmango.body,false); } 
}
