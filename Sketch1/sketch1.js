function setup() {
  createCanvas(720, 400,);
 background(0);
}



function draw() {

 square(mouseX+60, mouseY-60, 120);

  ellipse(mouseX+30,mouseY, 40);
   ellipse(mouseX,mouseY+30, 40);
    ellipse(mouseX-30,mouseY, 40);
     ellipse(mouseX,mouseY-30, 40);

  let x = constrain(mouseX, 25, 650);

   rect(x, 300, 300, 300);

}