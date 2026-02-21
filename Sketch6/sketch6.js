let size = 50;


function setup() {
    createCanvas(1000, 800);
 
}

function draw() {
    background("blue");
    ellipse(mouseX, mouseY, size);

    if (mouseIsPressed) {
        size += 5;
    }
    else {
        size -= 5;
    }

}



