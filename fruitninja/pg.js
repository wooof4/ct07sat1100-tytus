let dojoBg;
function preload(){
    dojoBg=loadImage('assets/dojobackground.png')
}
function setup(){
    createCanvas(800,600);
    
    world.gravity.y=192.6
    i=new Sprite();
    i.x=400;
    i.y=300;
    i.width=100;
    i.height=100;
}
function draw(){
background(dojoBg);
}