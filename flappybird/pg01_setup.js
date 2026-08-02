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
    bird.width=100;
    bird.height=100;
    // bird.img=flapMidImg;
}

function draw(){
    image(bg,0,0,width,height);
}