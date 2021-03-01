const Engine = Matter.Engine; // namespacing
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;

var ground;
var ball;


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  var options={
    isStatic:true
  }

  ground = Bodies.rectangle(400,390,800,10,options);
  World.add(world,ground);

  var option={
      restitution:1
  }
 ball=Bodies.circle(200,100,25,option);
 World.add(world,ball);
 console.log(ground);
  
}

function draw() {
  background("black");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(400, 200, 50, 50);
   
  rect(ground.position.x,ground.position.y,800,10);
  
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);
  
 
    
  

}