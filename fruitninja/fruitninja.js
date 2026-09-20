let background;
function preload(){
    background=loadimage('assets/dojobackground.png')
}
function setup(){
    createCanvas(600,400);
    background(background);
    i=new Sprite();
    i.x=300;
    i.y=200;
    i.width=100;
    i.height=100;
}
function draw(){

}