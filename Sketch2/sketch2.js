function setup(){
    createCanvas(900, 600);
    background(173, 216, 230);
    
    

}

function draw(){
    background(173, 216, 230);
    rect(0,0,200, 600);
  let xPos = mouseX;
  let yPos = mouseY;

  if (mouseX > 200) { 
    xPos += random(-5, 5);
    yPos += random(-5, 5);
    fill('white');
  } else {
    fill('orange');
  }
  ellipse(xPos, yPos, 30);
}