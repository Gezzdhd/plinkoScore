var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle
var count=0
var gameState= "start"
var plinkos = [];
var divisions= []
var divisionHeight=300;
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);
 text("500", 30,650)
 text("500", 110,650)
 text("500", 190,650)
 text("500", 250,650)
 text("200", 360,650)
 text("200", 440,650)
 text("200", 490,650)
 text("100", 570,650)
 text("100", 650,650)
 text("100", 730,650)
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
 

   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
if(particle!=null){

  particle.display()

  if(particle.body.position.y>760){

  

  if(particle.body.position.x<300){

    score=score+500
    particle=null
    if(count>=5) gameState="end"
}
}
}
if(particle!=null){

  particle.display()

  if(particle.body.position.y>760){

  

  if(particle.body.position.x<300){

    score=score+500
    particle=null
 
}
}
}
if(particle!=null){

  particle.display()

  if(particle.body.position.y>760){

  

  if(particle.body.position.x<600){

    score=score+200
    particle=null
  
}
}
}
if(particle!=null){

  particle.display()

  if(particle.body.position.y>760){

  

  if(particle.body.position.x<800){

    score=score+100
    particle=null
   
}
}
}

if(count>=5) {
gameState="end"
textSize(50)
text("gameOver", 150, 150)
}

}

function mousePressed(){

if(gameState!=="end"){
  count++
  particle=new Particle(mouseX, 10, 10, 10)
}

}
