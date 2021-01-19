function setup()
{
    createCanvas(800,600);
}
function draw()
{
    background(153,50,204); //background color
    // upper border
    noStroke();
    fill(0); // border color
    rect(0,0,800,20);
    // left border
    rect(0,20,20,600);
    // bottom border
    rect(20,580,800,20);
    // right border
    rect(780,20,20,600);


    // NEW WORK STARTS HERE


fill(0);
textSize(23);
text("Nate Hathorne",615,560);
text("Shapes Review",35,50);

// lime square
fill(25,220,122);
square(55,130,70);

// yellow circle
fill(255,200,22);
circle(540,140,90);

// cyan rect
fill(25,220,222);
rect(140,340,25,90);

// green rect
fill(34,139,34);
rect(400,420,120,70);

// magenta oval
fill(255,0,255);
ellipse(300,120,190,70);

// blue ellipse
fill(25,20,222);
arc(300, 450, 80, 100, 90, PI + QUARTER_PI);

// weird blue shape
fill(25,120,222);
quad(538, 300, 386, 220, 669, 263, 530, 376);

// pink triangle
fill(225,120,222);
triangle(130, 275, 158, 200, 186, 275);

// red oval
fill(125,20,22);
ellipse(340,290,50,190);

// line
stroke(126,123,255);
strokeWeight(5);
line(90, 450, 200, 500);
}