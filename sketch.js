var ground;
var ball;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.

  ground = new Ground(400, 690, 800, 10);
  ball = new Ball(40,680,30)
 box1=new Box(520,650,10,70)
box2=new Box(650,650,10,70)
  Engine.run(engine);
}

function draw() {
  background(0);
  ground.display();
  box1.display()
  box2.display()
  ball.display()
  if(keyDown(UP_ARROW)){
    Matter.Body.applyForce(ball.ball, ball.ball.position,{x:5, y:-2})
  }
  drawSprites();
}
