var ship ,ship1;
var sea ,sea1;
function preload() {
  ship1= loadAnimation("ship-1.png","ship-2.png")
  sea1= loadImage("sea.png")
}


function setup(){
  createCanvas(600,500);
  
  sea= createSprite(600,300);
  sea. addImage("running",sea1)
  sea. scale=0.5;
  sea. velocityX=-1;

 ship = createSprite(50,200,20,50);
 ship.addAnimation("running",ship1);
 

 ship.scale=0.25;
 ship.x= 90;
 ship.y= 300;

}
function draw() {
  background("blue");
 
  


if (sea.x < 0) {
  sea.x = sea.width/2;
}


drawSprites();
}
