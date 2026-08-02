let bird,floor;
let flapMidImg,bg,base;

function preload(){
    flapMidImg=loadImage('assets/redbird-midflap.png');
    bg=loadImage('assets/background-night.png');
    base=loadImage('assets/base.png');
}

function setup(){
    createCanvas(400,600);
    background('white');

    // //sprite
    bird=new Sprite();
    bird.x=width/2;
    bird.y=200;
    bird.width=10;
    bird.height=10;
    bird.img=flapMidImg;
    bird.collider = 'dynamic';
    // bird.drag=-100;
    bird.mass=2;
    bird.bounciness=0.5;
    world.gravity.y=10;
    // world.gravity.x=20;
    floor = new Sprite()
    floor.x=200;
    floor.y=height -20;
    floor.width=400;
    floor.height=125;
    floor.collider='static'
    floor.img=base;
    wall= new Sprite
    wall.x=400;
    wall.y=0;
    wall
}


function draw(){
    image(bg,0,0,width,height);
}