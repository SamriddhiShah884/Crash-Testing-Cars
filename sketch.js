var car;  
var b, bImg;
var wall ;
var speed;
var weight;
var sound;

function preload(){
//carImg=loadImage("car.svg");
bImg=loadImage("road.jpg");
sound=loadSound("s.mp3");
}

function setup() {
  createCanvas(800,400);
 //b=createSprite(0,100);
 //b.addImage(bImg);
 //b.scale=1.7;

  car=createSprite(100, 100, 50, 50);
//   car.addImage(carImg);
//  car.scale=0.1;
car.shapeColor="deepskyblue";


  //car.debug=true;

  wall=createSprite(700,200,30,500);
wall.shapeColor="#964B00";
}

function draw() {
  background(	'#000000');  
if(keyDown("a")){
  //sound.play();
  speed=random(55,90);
  weight=random(400,1500);
  car.shapeColor="deepskyblue";
  car.x=100;
  car.y=100;
  car.velocityX=speed;
}
  if(wall.x-car.x < (car.width+wall.width)/2){
    car.velocityX=0;

    d=0.5*weight*speed*speed/22500;

    if(d<100){
      car.shapeColor="greenyellow";
    }
    else if(d>100 &&  d<180){
      car.shapeColor="yellow";
    }
    else if(d>180){
      car.shapeColor="red";
    }

  }
  drawSprites();
}