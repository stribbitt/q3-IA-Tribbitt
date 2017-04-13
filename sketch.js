var x = 300;
var y = 200;
var grade= [A,B,C,D,F]
function setup(){
    createCanvas(600,400);
}

function draw(){
    background(0,0,255);
    display();
    move();
    boundary();
}

function display(){
    fill(0);
    ellipse(x,y,50,50);
    stroke(255,0,0);
    strokeWeight(5);
}

function move(){
    if(keyIsDown(UP_ARROW)){
        this.y -=5
    }
    
    if(keyIsDown(DOWN_ARROW)){
        this.y +=5
    }
}

function boundary(){
    if(this.y > height){
        this.y = 0;
    }
    if(this.y < 0){
        this.y = height;
    }
}