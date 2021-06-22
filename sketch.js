var b
var t 
var e 
function preload(){
  t=loadImage("snow2.jpg")
  e=loadImage("snow4.webp")
}

function setup() {
  createCanvas(1200,800);

  b=createSprite(600,400,800,400)
  b.addImage(t)

}

function draw() {
  
  background(255,255,255);  
  if(frameCount%60===0){
    a= createSprite(random(1,1200),1, 50, 50);
    a.addImage(e)
    a.scale=0.2
    a.velocityY=4
  }

  
  drawSprites();
}