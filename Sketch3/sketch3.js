let x = 0;
let y = 0;

function setup() {
    createCanvas(1000, 400);
   

}


function draw(){
 background(23, 256, 143);
  if (x < mouseX) x += 2;
  else x -= 2;

  if (y < mouseY) y += 2;
  else y -= 2;

  ellipse(x, y, 30);

  fill(0, 200, 255);
}
