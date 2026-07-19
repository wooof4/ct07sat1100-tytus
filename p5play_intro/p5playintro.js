let ball;
let box;
let triangle
let base=10;
let height=5;
let area;
function setup() {
  // Set up the canvas
  new Canvas(800, 400);
  background(250); //background color

  // Basic shape testings
  // write your codes here

  // End Basic shape testing

   // Create a bouncing ball sprite
   // write your codes here
  ball=new Sprite();
  ball.x=25;
  ball.y=20;
  ball.diameter=40;
  ball.color='blue';
  box=new Sprite();
  box.x=50;
  box.y=50;
  box.w=50;
  box.h=100;
  box.color='green';
  triangle=new Sprite();
  triangle.x=100;
  triangle.y=100;
  triangle.w=50;
  triangle.h=50;
  
  // area=0.5* base * height
  // console.log("ssThe area of the triangle is "+area)
  for (let i=1; i=10; i++){
    console.log()
  }

}

function draw() {
  // write your codes here
    //  fill(255,0,200);
    // ellipse(600,250,300,300);
    // fill(155,100,0);
    // rect(525,500,150,300);
    // quad(525,500,675,500,775,300,425,300)

}