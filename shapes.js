function setup() {
createCanvas(windowWidth, windowHeight);
background(0, 0, 255);
  
  strokeWeight(7);
  fill(0, 255, 0);
  triangle(50,20,40,80,300,150);
  fill(255, 255, 1)
  rect(80,136,40);
  quad(28,41,100,400,250,15,42,100);
  ellipse(80,30,136,40);
  
}
function draw(){
  ellipse(mouseX,mouseY,50,50);
  
}
