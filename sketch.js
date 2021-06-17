const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var particles=[];
var plinkos=[];
var divisions=[];

var divisionHeight=300;

var score = 0;
var particle;
var count = 0;
var gameState="play"




function setup(){
  createCanvas(480,800);
 
      engine = Engine.create();
      world = engine.world;
      
ground1 = new Ground(240,height,480,20);

for (var k = 0 ; k <= width; k = k + 80){
  divisions.push(new Divisions(k,height-divisionHeight/2,10, divisionHeight));
  }

for (var j = 40 ; j <= width; j = j + 50){
  plinkos.push(new Plinko(j,75))
  }
   
  for (var j = 15 ; j <= width-10; j = j + 50){
    plinkos.push(new Plinko(j,175))
    }
    
    for (var j = 10 ; j <= width-20; j = j + 50){
      plinkos.push(new Plinko(j,275))
      }
      
      for (var j = 10 ; j <= width-10; j = j + 50){
        plinkos.push(new Plinko(j,375))
        }
       
        
}

function draw() {
  background(0);  
 Engine.update(engine)

 ground1.display();
 

 for (var j = 0 ; j<plinkos.length; j++){
  plinkos[j].display();
  }
  for (var k = 0 ; k<divisions.length; k++){
    divisions[k].display();
    }
    
    

    for (var s = 0 ; s<particles.length; s++){
      particles[s].display();
      }
      textSize(20)
      text("SCORE"+ score,20,20);
      text("500",20,500);
      text("500",100,500);
      text("500",180,500);
      text("500",260,500);
      text("200",340,500);
      text("200",420,500);
      text(mouseX+","+ mouseY,mouseX,mouseY)
 if (gameState==="end"){
   textSize(50)
   text("Game Over",150,250)
 }


 if (particle!=null)
{
  particle.display();
  if(particle.body.position.y>760)
  {
    if(particle.body.position.x<312)
    {
      score=score+500;
      particle=null;
      if(count>= 5) gameState= "end";
    }
    else if (particle.body.position.x>312){
      score=score+200;
      particle=null;
      if(count>= 5) gameState= "end";
    }
  }
} 




}
function mousePressed()
{
 
if (gameState !=="end")
  {
    console.log("jj")
    count++;
    particle= new Particle(mouseX,10,10,10);
  }
}





