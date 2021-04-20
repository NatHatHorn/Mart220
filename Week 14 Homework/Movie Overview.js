var mainColor = 255;

function setup() {
    createCanvas(640, 480);
    background(40);
    frameRate(20);
    //noStroke();
    rectMode(CENTER);
}
function draw() {
    fill(random(mainColor),random(mainColor),random(mainColor), random(100));

    var size= random(200);

    square(random(width), random(height), size);

    circle(random(width), random(height), size);

    if (frameCount % 2 == 0) {
        mainColor = 255 - mainColor; // 255 0 255 0 255 0 ..
    }
    saveFrames("myMovie",".png",1,25);

    if (frameCount > 20) { 
        noLoop();
    }
}