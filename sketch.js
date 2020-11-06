const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;

var bob1,bob2,bob3,bob4,bob5,bob6;
var toproof;
var rope1;

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
  world = engine.world;

  toproof= new roof(380,60,325,15);
  bob1=new bob(380,300,30);
  bob2=new bob(bob1.x+60,300,30);
  
}

function draw() {
  background("lightgrey");  
  
  Engine.update(engine);
 
  toproof.display();
  bob1.display();
 bob2.display();
  bob3.display();
 bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}
function keyPressed()
{
 if(keyCode===UP_ARROW)
 {
  Matter.Body.applyForce(bob5.body,bob5.body.position,{x:-130,y:130});
 }

}