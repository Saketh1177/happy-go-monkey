
var monkey , monkey_running
var banana ,bananaImage
var obstacle, obstacleImage
//var FoodGroup, obstacleGroup
var score
var ground


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,600)
monkey=createSprite(80,315,20,20)
monkey.addAnimation("moving",monkey_running)
monkey.scale=0.1
  
ground=createSprite(450,350,9000000000000000000000000000000000000,10)
ground.velocityX=-5;
ground.x=ground.width/2;

}


function draw() {
background(225)

createEdgeSprites();  
monkey.bounceoffEdges
monkey.collide(ground)  
  
if(keyDown("space")){
monkey.velocityY=-5    
}

  if(keyDown("d")){
monkey.velocityY=+5    
}

  
  
obstacles(); 
food(); 
drawSprites()
}

function food () {
if(World.frameCount%100===0){ 
banana=createSprite(600,270,10,10);   
banana.addImage(bananaImage);
banana.velocityX=-5; 
banana.scale=0.07;
}      
  }
function obstacles () {
if(World.frameCount%100===0)
{
  obstacle=createSprite(600,320,10,10) ; 
  obstacle.addImage(obstaceImage);
  obstacle.velocityX=-5;
  obstacle.scale=0.2
}
}