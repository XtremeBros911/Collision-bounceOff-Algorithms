var movingRect, fixedRect

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(400, 400, 80, 30);
  movingRect.shapeColor = "green";
  movingRect.velocityY = -5;
  fixedRect = createSprite(400,0,50,80);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY = 5;
}

function draw() {
  background(0,0,0); 
  
 // movingRect.x = World.mouseX;
 // movingRect.y = World.mouseY;

  /* if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y-movingRect.y < movingRect.height/2 + fixedRect.height/2)
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  } */

  if(movingRect.x-fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x-movingRect.x < movingRect.width/2 + fixedRect.width/2)
  {
    movingRect.velocityX = movingRect.velocityX * (-1);
    fixedRect.velocityX = fixedRect.velocityX * (-1);
  }

  if(movingRect.y-fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y-movingRect.y < movingRect.height/2 + fixedRect.height/2)
  {
    movingRect.velocityY = movingRect.velocityY * (-1);
    fixedRect.velocityY = fixedRect.velocityY * (-1);
  }

  edges = createEdgeSprites();

  movingRect.bounceOff(edges);
  fixedRect.bounceOff(edges);

  drawSprites();
}
