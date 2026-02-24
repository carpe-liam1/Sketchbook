
let points = [];
let resolution = 80; 
let radius = 150;
let pushStrength = 0.15; 

function setup() {
  createCanvas(600, 600);
  
  for (let i = 0; i < resolution; i++) {
    let angle = map(i, 0, resolution, 0, TWO_PI);
    let x = width/2 + cos(angle) * radius;
    let y = height/2 + sin(angle) * radius;

    points.push({
      currX: x,
      currY: y,
      goalX: (mouseX-x)/(mouseY-y)*(x),
      goalY: (mouseX-x)/(mouseY-y)*(y),


    
    });
  }
}

function draw() {
  background(240);

  fill(255, 0, 0);
  stroke(0);
  strokeWeight(2);
  
  beginShape();


  for (let p of points) {
    if (mouseIsPressed) {
      let d = dist(mouseX, mouseY, p.currX, p.currY);
      
      if (d < 100) {
        p.currX = lerp(p.currX, p.goalX, pushStrength);
        p.currY = lerp(p.currY, p.goalY, pushStrength);
      }
    }

   

    curveVertex(p.currX, p.currY);
  }

  curveVertex(points[0].currX, points[0].currY);
  curveVertex(points[1].currX, points[1].currY);
  endShape();
}
