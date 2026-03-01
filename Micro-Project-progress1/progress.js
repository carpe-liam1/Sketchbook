
let points = [];
let resolution = 200; 
let radius = 150;
let pushStrength = 0.05; 
let pullStrength = 0.05;

function setup() {
  createCanvas(600, 600);
  
  for (let i = 0; i < resolution; i++) {
    let angle = map(i, 0, resolution, 0, TWO_PI);
    let x = width/2 + cos(angle) * radius;
    let y = height/2 + sin(angle) * radius;

    points.push({
      currX: x,
      currY: y,
    


    });
  }
}

function draw() {
  background(240);

  fill(255, 0, 0);
  stroke(0);
  strokeWeight(0);


  beginShape();


for (let p of points) {
  if (mouseIsPressed) {
    // 1. Calculate the distance and the difference
    let dx = p.currX - mouseX;
    let dy = p.currY - mouseY;
    let d = dist(mouseX, mouseY, p.currX, p.currY);
    let minGap = 5

   
    if (d < 120 && d > 0) {

      p.currX += (dx / d) * 10 * pushStrength;
      p.currY += (dy / d) * 10 * pushStrength;
    }

    }


    curveVertex(p.currX, p.currY);
  }

  curveVertex(points[0].currX, points[0].currY);
  curveVertex(points[1].currX, points[1].currY);
  endShape();
}
