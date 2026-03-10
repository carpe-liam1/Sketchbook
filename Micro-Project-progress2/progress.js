
let font;
let points = [];
let pushStrength = 0.02;
let isPaused = false;




function functionPause() {
  isPaused = !isPaused;   // toggle true/false
}

function preload() {
  font = loadFont('Avante.otf'); 
}

function setup() {
  createCanvas(2000, 600);

let button = document.getElementById("myButton");
button.addEventListener("click", functionPause);

let txt = "AMOEBA";

let options = {
  sampleFactor: 0.2,


};

let textPoints = font.textToPoints(txt, 150, 350, 200, options);


  for (let pt of textPoints) {
    points.push({
      baseX: pt.x,
      baseY: pt.y,
      currX: pt.x,
      currY: pt.y
    });
  }
}

function draw() {
  background(240);
  fill(0, 155, 155);
  noStroke();

  for (let p of points) {

    if (!isPaused) {  

      let dx = p.currX - mouseX;
      let dy = p.currY - mouseY;
      let d = dist(mouseX, mouseY, p.currX, p.currY);

      if (mouseIsPressed && d < 80 && d > 0) {
        p.currX += (dx / 20) * 10 * pushStrength;
        p.currY += (dy / d) * 10 * pushStrength;
      } else {
        p.currX = lerp(p.currX, p.baseX, 0.001);
        p.currY = lerp(p.currY, p.baseY, 0.001);
      }
    }

    circle(p.currX, p.currY, 4);
  }
}


