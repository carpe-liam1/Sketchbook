let outsideSmall;
let insideBig;

function setup() {
  createCanvas(800, 600);
  rectMode(CENTER);
}

function draw() {
  background(220);

  const cx = width / 2;
  const cy = height / 2;

  fill(255, 0, 0);
  noStroke();
  rect(cx, cy, 600, 300);   

 
  fill(0, 0, 255);
  rect(cx, cy, 300, 150);  

  
  const bigLeft = cx - 600 / 2;
  const bigRight = cx + 600 / 2;
  const bigTop = cy - 300 / 2;
  const bigBottom = cy + 300 / 2;


  const smallLeft = cx - 300 / 2;
  const smallRight = cx + 300 / 2;
  const smallTop = cy - 150 / 2;
  const smallBottom = cy + 150 / 2;

 
  outsideSmall =
    mouseX > smallLeft && mouseX < smallRight &&
    mouseY > smallTop && mouseY < smallBottom;


  insideBig =
    mouseX > bigLeft && mouseX < bigRight &&
    mouseY > bigTop && mouseY < bigBottom;


  if (insideBig && !outsideSmall) {
    fill(0, 255, 0);
    noStroke();
    ellipse(mouseX, mouseY, 20, 20);
  }
}
function mousePressed() {
  fill(255, 165, 0);      
  noStroke();
  ellipse(mouseX, mouseY, 40, 40);
}