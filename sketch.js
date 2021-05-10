const Engine=matter.Engine;
const World=matter.World;
const Bodies=matter.Bodies;
var engine,world,ground,ball;


function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
var ground_options={
isStatic:true
}
  ground=Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  ball_options={
  restitution:1.0

  }
  ball = Bodies.circle(200,100,20, ball_options);
   World.add(world,ball);
 
}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.postion.y,400,20);
  ellipseMode(RADIUS);
   ellipse(ball.position.x, ball.position.y, 20, 20);

}