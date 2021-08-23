
var trex ,trex_running;

//load animations, images and sound
function preload () {
  trexani = loadAnimation ("trex1.png", "trex3.png", "trex4.png")
  groundani = loadImage ("ground2.png")
}

function setup(){
  createCanvas(600,200)
  trex = createSprite (50, 180, 20, 25)
trex.addAnimation ("running", trexani)  
 trex.scale = 0.5
 ground = createSprite (300, 190, 600, 20)
 ground.addImage (groundani)
}

function draw(){
  background("lightgray")
  trex.collide (ground)
  ground.velocityX = -4
  if (ground.x < 0 ) {
    ground.x = 600
  }
  if (keyDown ("space")) {
    trex.velocityY = -5
  }
  trex.velocityY = trex.velocityY + 0.2 
  drawSprites ()
}
