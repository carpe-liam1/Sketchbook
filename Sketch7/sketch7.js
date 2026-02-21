let effort = [0,11,0];
let priviledged = [true,false,false];
let helped = [false,true,false]
let maxEffort = 22;

function setup() {

    createCanvas (700,250);
    textSize(16);
}

function draw() {
background (230);

let barWidth = width/3

for (let i = 0; i <3; i++){ 

if (priviledged[i]){
fill ("green");
} 
else if (helped[i]){
fill ("yellow");
} 
else {
fill ("red");
}

let h = map(effort[i], 0, maxEffort, 0, height-60);

rect(i*barWidth + 40, height - h - 50, barWidth - 80, h);

fill (0);

if (effort[i] >= maxEffort){
    text("DONE", i* barWidth + 40, 25);
    effort[i] = maxEffort;
}else{
    text("Effort: " + effort[i], i*barWidth + 40, 25);
}



}

text("same input, different outcomes", 10, height-30);
text("but help makes a difference", 10, height-10);
}


function mousePressed() {
    for(let i = 0; i< 3; i++){
        if(priviledged[i]){
            effort[i] = effort[i]+1;
        }else{
            if(random()<0.5){
              effort[i] = effort[i]+1;  
            }
        }
    }


}












