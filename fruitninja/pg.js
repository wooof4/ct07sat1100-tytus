let dojoBg;
let fruitGroup;
let fruitTypes=[];
let peach;
let watermelon;
function preload(){
    dojoBg=loadImage('assets/dojobackground.png')
    peach={
        whole:loadImage('assets/peachwhole.png')
    }
    fruitTypes=[peach,watermelon]
}
function setup(){
    createCanvas(800,600);
    world.gravity.y=10
}
function draw(){
background(dojoBg);
if (frameCount%120===0){
    spawnFruit();
}
}
function spawnFruit(){
    let fruitData=random(fruitTypes);
    let randomX=random(300,500);
    let fruit=new sprite(randomX)
    fruit.image=fruitData.whole;
    fruit.vel.y=random(-10,-14);
    fruit.vel.x=random(-2,2);
    fruit.friction=0;
    fruitGroup.add(fruit);
}