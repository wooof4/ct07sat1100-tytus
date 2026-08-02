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
    bird.bounciness=10;
    world.gravity.y=1000;
    // world.gravity.x=20;
    floor = new Sprite()
    floor.x=200;
    floor.y=height -20;
    floor.width=400;
    floor.height=125;
    floor.collider='static'
    floor.img=base;
    wall1= new Sprite
    wall1.x=420;
    wall1.y=300;
    wall1.width=20
    wall1.height=600
    wall1.collider='static'
    wall2=new Sprite
    wall.x=-20;
    wall2.y=300;
    wall2.width=-20
    wall.height=
}


function draw(){
    image(bg,0,0,width,height);
}