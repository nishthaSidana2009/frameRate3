let x = 400;
let y = 400

function setup() {
  createCanvas(400, 400);
    background("red");
    stroke(255);
    noFill();
    frameRate(30);
}

function draw() {
  x=x-1;
  if (x<0){
    x = width;
  }
  ellipse(x,0,width,y);
  y=y-1;
  if (y<0){
    y = height;
  }
  ellipse(width,y,x,height);
}