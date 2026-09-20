let dojoBg;
let fruuitGroup;
let fruitTypes=[];
let peach;

function preload(){
    dojoBg=loadImage('assets/dojobackground.png')
    peach=loadImage('assets/peachwhole.png')
}
function setup(){
    createCanvas(800,600);
    
    world.gravity.y=10
    i=new Sprite();
    i.x=400;
    i.y=300;
    i.width=75;
    i.height=75;
}
function draw(){
background(dojoBg);
}