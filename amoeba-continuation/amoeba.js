let font;
let points = [];
let pushStrength = 0.05;
let isPaused = false;
let isReverting = false;
let distSlider; // Variable for the slider

function functionRevert() { isReverting = !isReverting; }
function functionReset() {
  for (let pt of points) {
    pt.currX = pt.baseX;
    pt.currY = pt.baseY;
  }
}

function preload() {
  font = loadFont('Avante.otf');
}

function setup() {
  createCanvas(2000, 1000);

  // Setup Buttons
  let button2 = document.getElementById("revertbutton");
  if (button2) button2.addEventListener("click", functionRevert);
  let button3 = document.getElementById("resetbutton");
  if (button3) button3.addEventListener("click", functionReset);

  // Setup Text Input
  userInput = createInput('AMOEBA');
  userInput.position(20, 20);
  userInput.input(updateTextPoints);

  // --- NEW: Perimeter Slider ---
  // createSlider(min, max, default_value, step)
  distSlider = createSlider(10, 800, 60, 1);
  distSlider.position(20, 50);
  
  updateTextPoints();
}

function updateTextPoints() {
  let txt = userInput.value();
  let options = { sampleFactor: 0.4 };
  points = [];
  let textPoints = font.textToPoints(txt, 150, 350, 200, options);
  for (let pt of textPoints) {
    points.push({ baseX: pt.x, baseY: pt.y, currX: pt.x, currY: pt.y });
  }
}

function draw() {
  background(240);
  
  // Label for the slider
  fill(0);
  text("Distortion Perimeter: " + distSlider.value(), 160, 65);

  fill(0, 155, 155);
  noStroke();

  // Get the current value from the slider
  let maxDist = distSlider.value();

  for (let p of points) {
    // 1. Handle Movement (Pushing)
    if (!isPaused) {
      let d = dist(mouseX, mouseY, p.currX, p.currY);
      
      // Use maxDist variable here instead of 60
      if (mouseIsPressed && d < maxDist && d > 0) {
        let dx = p.currX - mouseX;
        let dy = p.currY - mouseY;
        p.currX += (dx / d) * 10 * pushStrength;
        p.currY += (dy / d) * 10 * pushStrength;
      }
    }

    // 2. Handle Reverting (Returning to base)
    if (isReverting) {
      p.currX = lerp(p.currX, p.baseX, 0.02);
      p.currY = lerp(p.currY, p.baseY, 0.02);
    }
    
    circle(p.currX, p.currY, 4);
  }
}
