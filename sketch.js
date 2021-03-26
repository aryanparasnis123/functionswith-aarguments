var fixedRect, movingRect;
var gameObject,gameObject1,gameObject2;
function setup() {
  createCanvas(1000,700);
  fixedRect=createSprite(600,150,50,80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;

  gameObject=createSprite(400,200,80,30)
  gameObject.shapeColor="green"
  gameObject.debug="true"
  
  movingRect=createSprite(400,200,80,30)
  movingRect.shapeColor="green"
  movingRect.debug="true"
 
  gameObject1=createSprite(100,300,50,50)
  gameObject1.shapeColor="blue"
  gameObject1.debug="true"
  gameObject1.velocityX=2

  gameObject2=createSprite(900,300,50,50)
  gameObject2.shapeColor="Yellow"
  gameObject2.debug="true"
  gameObject2.velocityX=-2
}

function draw() {
  
  background("black");  
  console.log(fixedRect.x-movingRect.x)
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  bounceOff(gameObject1,gameObject2);

  if(isTouching (fixedRect,movingRect)){
    movingRect.shapeColor = "red"
    fixedRect.shapeColor="red"
  }
else {
  movingRect.shapeColor = "green"
  fixedRect.shapeColor="green"
}
if(isTouching (gameObject,movingRect)){
  movingRect.shapeColor = "red"
  gameObject.shapeColor="red"
}
else {
movingRect.shapeColor = "green"
gameObject.shapeColor="green"
}
  drawSprites();
}
