let ball;
let box;

function setup() {
  // Set up the canvas
  new Canvas(1200, 800);
  background(250); //background color

  // Basic shape testing
  // write your codes here

  // End Basic shape testing

   // Create a bouncing ball sprite
   // write your codes here
  ball=new Sprite();
  ball.x =100;
  ball.y=200;
  ball.diameter=40;
  ball.diameter='blue';
  box= new Sprite();
  box.y=100;
  box.x=100;
  box.w=50;
  box.h=50;
  box.color='green'
}

function draw() {
  // write your codes here
    //  fill(255,0,200);
    // ellipse(600,250,300,300);
    // fill(155,100,0);
    // rect(525,500,150,300);
    // quad(525,500,675,500,775,300,425,300)

}