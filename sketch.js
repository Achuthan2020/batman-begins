var raindrops;
var manWithUmbrella;
var thunderboltAnimation;
var manWithUmbrellaAnimation;
function preload(){
  thunderBoltAnimation=loadAnimation("images/1.png,2.png,3.png,4.png") 
  manWithUmbrellaAnimation=loadAnimation("images/walking_1.png,walking_2.png,walking_3.png,walking_4.png,walking_5.png,walking_6.png,walking_7.png,walking_8.png") 
}

function setup(){
    var canvas=createCanvas(1200,400)
   thunderBolt=createSprite(600,100)
   thunderBolt.addAnimation(thunderBoltAnimation)

    
}

function draw(){
    background(0,0,255)
    drawsprites
}   

