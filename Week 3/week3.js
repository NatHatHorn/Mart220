// Variables
var counter = 0;
var shape1X = 40, shape1Y = 140;
var shape2X = 640, shape2Y = 140;
var shape3X = 140, shape3Y = 340;
var shape4X = 440, shape4Y = 340;
var shape5X = 340, shape5Y = 140;
var shape6X = 550, shape6Y = 450;
var shape7X = 538, shape7Y = 231;
var shape8X = 130, shape8Y = 275;
var shape9X = 340, shape9Y = 290;
var shape10X = 50, shape10Y = 240;
var redColor1, greenColor1, blueColor1;
var redColor2, greenColor2, blueColor2;
var redColor3, greenColor3, blueColor3;
var redColor4, greenColor4, blueColor4;
var redColor5, greenColor5, blueColor5;
var redColor6, greenColor6, blueColor6;
var redColor7, greenColor7, blueColor7;
var redColor8, greenColor8, blueColor8;
var redColor9, greenColor9, blueColor9;
var redColor10, greenColor10, blueColor10;
var shape1Size = 50;
var shape2Size = 90;
var shape3Sizew = 20;
var shape3Sizeh = 70;
var shape4Sizew = 120;
var shape4Sizeh = 70;
var shape5Sizew = 190;
var shape5Sizeh = 70;
var shape6Size = 90;
var shape9Sizew = 50;
var shape9Sizeh = 190;

//week 3 variables
var heart;
var heartX = 100;
var heartY = 100;
var heartSpeed = 2;
var skull;
var skullX = 200;
var skullY = 200;
var skullSpeed = 3;
var bolt;
var boltX = 300;
var boltY = 300;
var boltSpeed = 5;

var newFont;
var timerText = 0;

function preload() 
{           // preloaded images and fonts
    heart = loadImage('assets/heart.png')
    skull = loadImage('assets/skull.png')
    bolt = loadImage('assets/bolt.png')
    newFont = loadFont('assets/PottaOne-Regular.ttf')
}


// setup color
function setup()
{
    createCanvas(800,600);
    redColor1 = random(255);
    greenColor1 = random(255);
    blueColor1 = random(255);
    redColor2 = random(255);
    greenColor2 = random(255);
    blueColor2 = random(255);
    redColor3 = random(255);
    greenColor3 = random(255);
    blueColor3 = random(255);
    redColor4 = random(255);
    greenColor4 = random(255);
    blueColor4 = random(255);
    redColor5 = random(255);
    greenColor5 = random(255);
    blueColor5 = random(255);
    redColor6 = random(255);
    greenColor6 = random(255);
    blueColor6 = random(255);
    redColor7 = random(255);
    greenColor7 = random(255);
    blueColor7 = random(255);
    redColor8 = random(255);
    greenColor8 = random(255);
    blueColor8 = random(255);
    redColor9 = random(255);
    greenColor9 = random(255);
    blueColor9 = random(255);
    redColor10 = random(255);
    greenColor10 = random(255);
    blueColor10 = random(255);

    setInterval(changeSpeed, 1000);
}

function draw()
{
   background(153,50,204); //background color

   // images added after preload
   Image(heart, heartX, heartY);
   Image(skull, skullX, skullY);
   Image(bolt, boltX, boltY);
   
   // heart horazontal axis
   heartX += heartSpeed;
   if(donutX >= height - heart.height || heartX <= heart.width/8)
   {
       heartSpeed *= -1;
   }

   // skull vertical axis
   skullY += skullSpeed;
   if(skullY >= height - skull.height || skullY <= skull.height/8)
   {
       skullSpeed *= -1;
   }

   //bolt diagonal axis
   boltY += boltSpeed;
   if(boltY >= height - bolt.height || boltX <= bolt.height/8)
   {
       boltSpeed *= -1;
   }
   boltX += boltSpeed;
   if(boltX >= width - bolt.width || boltX <= bolt.width/8)
   {
       boltSpeed*= -1;
   }

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

//TEXT 
fill(0);
// add font from preload
textFont(newFont);
textSize(23);
text("Nate Hathorne",615,560);
text("Shapes Review",35,50);
// add time passed text
text("Time Passed: " + timerText, 550, 50);

 // change the shapes and color when it hits 1000
 if(counter > 1000)
 {
     shape1X = random(100,600);
     shape1Y = random(100,500);
     shape2X = random(100,600);
     shape2Y = random(100,500);
     shape3X = random(100,600);
     shape3Y = random(100,500);
     shape4X = random(100,600);
     shape4Y = random(100,500);
     shape5X = random(100,600);
     shape5Y = random(100,500);
     shape6X = random(100,600);
     shape6Y = random(100,500);
     shape7X = random(100,600);
     shape7Y = random(100,500);
     shape8X = random(100,600);
     shape8Y = random(100,500);
     shape9X = random(100,600);
     shape9Y = random(100,500);
     shape10X = random(100,600);
     shape10Y = random(100,500);
     redColor1 = random(255);
     greenColor1 = random(255);
     blueColor1 = random(255);
     redColor2 = random(255);
     greenColor2 = random(255);
     blueColor2 = random(255);
     redColor3 = random(255);
     greenColor3 = random(255);
     blueColor3 = random(255);
     redColor4 = random(255);
     greenColor4 = random(255);
     blueColor4 = random(255);
     redColor5 = random(255);
     greenColor5 = random(255);
     blueColor5 = random(255);
     redColor6 = random(255);
     greenColor6 = random(255);
     blueColor6 = random(255);
     redColor7 = random(255);
     greenColor7 = random(255);
     blueColor7 = random(255);
     redColor8 = random(255);
     greenColor8 = random(255);
     blueColor8 = random(255);
     redColor9 = random(255);
     greenColor9 = random(255);
     blueColor9 = random(255);
     redColor10 = random(255);
     greenColor10 = random(255);
     blueColor10 = random(255);
     shape1Size = random(100);
     shape2Size = random(100);
     shape3Sizew = random(50);
     shape3Sizeh = random(100);
     shape4Sizew = random(200);
     shape4Sizeh = random(100);
     shape5Sizew = random(200);
     shape5Sizeh = random(100);
     shape6Size = random(135);
     shape9Sizew = random(100);
     shape9Sizeh = random(200);
     counter = 0;
 }
 counter++;

 // SHAPES
// SHAPE 1
fill(redColor1,greenColor1,blueColor1);
square(shape1X,shape1Y,shape1Size);

// SHAPE 2
fill(redColor2,greenColor2,blueColor2);
circle(shape2X,shape2Y,shape2Size);

// SHAPE 3
fill(redColor3,greenColor3,blueColor3);
rect(shape3X,shape3Y,shape3Sizew,shape3Sizeh);

// SHAPE 4
fill(redColor4,greenColor4,blueColor4);
rect(shape4X,shape4Y,shape4Sizew,shape4Sizeh);

// SHAPE 5
fill(redColor5,greenColor5,blueColor5);
ellipse(shape5X,shape5Y,shape5Sizew,shape5Sizeh);

// SHAPE 6
fill(redColor6,greenColor6,blueColor6);
arc(shape6X,shape6Y,shape6Size, 100, 90, PI + QUARTER_PI);

// SHAPE 7
fill(redColor7,greenColor7,blueColor7);
quad(shape7X, shape7Y, 386, 220, 669, 263, 530, 376);

// SHAPE 8
fill(redColor8,greenColor8,blueColor8);
triangle(shape8X, shape8Y, 158, 200, 186, 275);

// SHAPE 9
fill(redColor9,greenColor9,blueColor9);
ellipse(redColor9,greenColor9,blueColor9);

// SHAPE 10
stroke(redColor10,greenColor10,blueColor10);
strokeWeight(5);
line(shape10X, shape10Y, 200, 500);
}

// Call back function, updates time shown, and changes the speed of all the objects
function changeSpeed() {
        timerText ++;
        if (timerText % 5 == 0) {
            heartSpeed = random(1, 10);
            skullSpeed = random(1, 10);
            boltSpeed = random(1, 10);
        }
}