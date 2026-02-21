
let img = [];
let currentIndex = 0;

let lastX, lastY;
let moveThreshold = 100;
let accumulatedDistance = 0;

function preload() {
    img[0]=loadImage("img/Eating1.jpeg")
    img[1]=loadImage("img/Eating2.jpeg")
    img[2]=loadImage("img/Eating3.jpeg")
    img[3]=loadImage("img/Eating4.jpeg")
    img[4]=loadImage("img/Eating5.jpeg")
    img[5]=loadImage("img/Eating6.jpeg")
    img[6]=loadImage("img/Eating7.jpeg")
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  textAlign(CENTER, CENTER);
 background(0);
  lastX = mouseX;
  lastY = mouseY;
}

function draw() {
 

  trackMouseDistance();
  displayImage();

}

function trackMouseDistance() {
  let d = dist(mouseX, mouseY, lastX, lastY);
  accumulatedDistance += d;

  if (accumulatedDistance > moveThreshold) {
    currentIndex++;

    if (currentIndex >= img.length) {
      currentIndex = 0;
    }

    accumulatedDistance = 0;
  }

  lastX = mouseX;
  lastY = mouseY;
}


function displayImage() {
  let currentImg = img[currentIndex];

  let imgRatio = currentImg.width / currentImg.height;
  let canvasRatio = width / height;

  let drawWidth, drawHeight;

  if (imgRatio > canvasRatio) {
    drawWidth = width * 0.6;
    drawHeight = drawWidth / imgRatio;
  } else {
    drawHeight = height * 0.5;
    drawWidth = drawHeight * imgRatio;
  }

  image(currentImg, mouseX, mouseY, drawWidth, drawHeight);
}


