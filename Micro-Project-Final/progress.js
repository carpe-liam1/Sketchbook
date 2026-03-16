
let font;
let points = [];
let pushStrength = 0.05;
let isPaused = false;
let isReverting = false;





function functionRevert() {
  isReverting = !isReverting;
}

function functionReset() {
  for (let pt of points) {
    pt.baseX = pt.x;
    pt.baseY = pt.y;
    pt.currX = pt.x;
    pt.currY = pt.y;
  }
}

function preload() {
  font = loadFont('Avante.otf'); 
}

function setup() {
  createCanvas(2000, 600);



let button2 = document.getElementById("revertbutton");
button2.addEventListener("click", functionRevert);

let button3 = document.getElementById("resetbutton");
button3.addEventListener("click", functionReset);

  userInput = createInput('AMOEBA');
  userInput.position(20, 20); 
  userInput.input(updateTextPoints); 

  updateTextPoints(); 
}
function updateTextPoints() {
  let txt = userInput.value();
  let options = { sampleFactor: 0.6 };
  
  points = [];
  

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


function draw() {
  background(240);
  fill(0, 155, 155);
  noStroke();

  for (let p of points) {
    // 1. Handle Movement (Pushing)
    if (!isPaused) {
      let d = dist(mouseX, mouseY, p.currX, p.currY);
      if (mouseIsPressed && d < 60 && d > 0) {
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
