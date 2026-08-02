let bird,floor;
let flapMidImg,bg,base

function preload(){
    flapMidImg=loadimage('assets/redbird-midflap.png')
    bg=loadimage('assets/background-night.png')
    base=loadimage('assets/base.png')
}

function setup(){
    createCanvas(400,600)
    background('white')

    //sprite
    bird=new Sprite();
    bird.x=width/2;
    bird.y=200
    bird.width=30;
    bird.height=30;
    bird.img=flapMidImg;
}

function draw(){
    
}