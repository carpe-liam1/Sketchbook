
let img = [];
let currentIndex = 0;

let lastX, lastY;
let moveThreshold = 60;
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

  lastX = mouseX;
  lastY = mouseY;
}

function draw() {
 
 background(255);
  trackMouseDistance();
  displayImage();

  textAlign(CENTER, CENTER);
  fill(0);
  text("Current Image: " + (currentIndex + 1) + " / " + img.length, width / 2, 80);
  textSize(35);


}

function trackMouseDistance() {
  let d = dist(mouseX, mouseY, lastX, lastY);

 dx= mouseX - lastX;
  dy = mouseY - lastY;

  accumulatedDistance += dx + dy ;

  if (accumulatedDistance > moveThreshold) {
    currentIndex++;
    if (currentIndex >= img.length) {
      currentIndex = 0;
    }
    accumulatedDistance = 0;
  }

  if (accumulatedDistance < -moveThreshold) {
    currentIndex--;

    if (currentIndex < 0) {
      currentIndex = img.length - 1;
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

  image(currentImg, width/2, height/2, drawWidth, drawHeight);
}


