const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,ground,ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var option={isStatic: true}
  ground=Bodies.rectangle(200,390, 400, 20,option)
  World.add(world, ground)
  console.log(ground);
  console.log(ground.position.x);
  console.log(ground.position.y);

  var ball_option={restitution : 1}
  ball=Bodies.circle(200,50,20,ball_option);
  World.add(world,ball);
  console.log(ball.restitution);
}

function draw() {
  background(0);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20,20)
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20)
 //rect(200,200,50,50)
}