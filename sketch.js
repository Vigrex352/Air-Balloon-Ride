var balloon

function preload(){
// load the background img 
}

function preload() {
  
}

function setup() {
  balloonImg = loadImage("HotAirBallon-03.png");
  backgroundImg = loadImage("cityImage.png");  
  backgroundImg = loadImage("cityImage.png");  
  createCanvas(500,500);
  balloon = createSprite(balloonImg);
}


function draw() {
  background(backgroundImg);  
  drawSprites();
  

  if (keyDown(LEFT_ARROW)){
    balloon.x = balloon.x - 10;
  }
  if (keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x + 10;
  }
  if (keyDown(UP_ARROW)){
    balloon.y = balloon.y - 10;
  }
  if (keyDown(DOWN_ARROW)){
    balloon.y = balloon.y + 10;
  }

}