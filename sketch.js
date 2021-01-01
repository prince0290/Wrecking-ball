const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground ;
var box1 , box2 , box3 , box4 , box5 ,box6 , box7 , box8 , box9 ,box10 , box11 , box12 , box13 , box14 , box15 ,box16 , box17 , box18 , box19 ,box20 ;
var ball ;
var rope ;

function preload()
{

}
	

function setup() {
	createCanvas(1500, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	ground = new Ground(750,680,1500,10);

	box1 = new Box(900,100,80,80);
	box2 = new Box(900,100,80,80);
	box3 = new Box(900,100,80,80);
	box4 = new Box(900,100,80,80);
	box5 = new Box(900,100,80,80);
	box6 = new Box(900,100,80,80);

	box7 = new Box(800,100,80,80);
	box8 = new Box(800,100,80,80);
	box9 = new Box(800,100,80,80);
	box10 = new Box(800,100,80,80);
	box11= new Box(800,100,80,80);
	box12 = new Box(800,100,80,80);

	box13 = new Box(700,100,80,80);
	box14 = new Box(700,100,80,80);
	box15 = new Box(700,100,80,80);
	box16 = new Box(700,100,80,80);
	box17= new Box(700,100,80,80);
	box18 = new Box(700,100,80,80);
	box19 = new Box(700,100,80,80);
	box20 = new Box(700,100,80,80);

	ball = new Ball(200,300,70);

	rope = new Rope(ball.body,{x:200,y:100});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
	ground.display();

	box1.display();
	box2.display();
	box3.display();
	box4.display();
	box5.display();
	box6.display();
	box7.display();
	box8.display();
	box9.display();
	box10.display();
	box11.display();
	box12.display();
	box13.display();
	box14.display();
	box15.display();
	box16.display();
	box17.display();
	box18.display();
	box19.display();
	box20.display();

	ball.display();

	rope.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
	rope.fly();
}

function keyPressed(){
	if(keyCode===32){
		rope.attach(ball.body);
	}
}