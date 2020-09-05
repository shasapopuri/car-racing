var  car,wall;
var speed,weight;//thickness



function setup() {
  createCanvas(1600,400); 
  
  speed=random(223,321);
  weight=random(30,52);
  //thickness=random(22,83);
  
  car=createSprite(50, 200, 20, 30);
  wall=createSprite(1200,200,60,height/2);
  wall.shapeColor="black";
}

function draw() {
  background("white");
  car.velocityX = speed;
 
  if (wall.x-car.x < (car.width+wall.width)/2) {
    
    car.velocityX=0;
    var deformation=0.5 * wight*speed*speed/225099;
     
    if(deformation>180)
    {
      car.shapeColor=color(255,0,0);
    }

   if(deformation<180 && deformation>100)
    {
      car.shapeColor=color(230,230,0);
    }

   if (deformation<100) 
   {  
      car,shapeColor=color(0,255,0);
   }
  }
/*if (hascolided(car,wall)) {
 car.velocityX=0;
 var damage=0.5 * weigth * speed* speed/(thickness*thickness*thickness);
 
 if (damage>10) {
    wall.shapeColor=color(255,0,0);
 } else if (damage<10){
    wall.shapeColor=color(0,255,0);
 }
  
}*/

  drawSprites();
}

/*function hascolided(lcar,lwall){

  carRightEdge=car.x + car.width;
  carleftEdge=wallleftEdge;

  if (carRightEdge>=wallleftEdge) {
    return true;
  }
  return false;
}*/