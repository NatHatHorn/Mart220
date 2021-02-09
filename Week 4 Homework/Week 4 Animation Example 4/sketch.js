// VARIABLES
var zombiegirl;
var animation = [];
var runanimation = [];
var zombieGirlObjects = [];
var zombieGirlWalkObjects = [];
var zombieGirlFightObjects = [];
var i = 0;
var x = 0;
var j = 0;
var counter = 0; 



function preload() {

    // Bring in all the assets from our folder
    // and create all our objects
   // idle animations
    zombiegirl = new imageclass('assets/Idle (11).png', 0, 0); 
    zombieGirlObjects[0] = zombiegirl;
    zombiegirl = new imageclass('assets/Idle (12).png', 0, 0);
    zombieGirlObjects[1] = zombiegirl;
    zombiegirl = new imageclass('assets/Idle (13).png', 0, 0);
    zombieGirlObjects[2] = zombiegirl;
    zombiegirl = new imageclass('assets/Idle (14).png', 0, 0);
    zombieGirlObjects[3] = zombiegirl;
    zombiegirl = new imageclass('assets/Idle (15).png', 0, 0);
    zombieGirlObjects[4] = zombiegirl;
    zombiegirl = new imageclass('assets/Idle (16).png', 0, 0);
    zombieGirlObjects[5] = zombiegirl;
    zombiegirl = new imageclass('assets/Idle (17).png', 0, 0);
    zombieGirlObjects[6] = zombiegirl;
    zombiegirl = new imageclass('assets/Idle (18).png', 0, 0);
    zombieGirlObjects[7] = zombiegirl;
    zombiegirl = new imageclass('assets/Idle (19).png', 0, 0);
    zombieGirlObjects[8] = zombiegirl;
    zombiegirl = new imageclass('assets/Idle (20).pns', 0, 0);
    zombieGirlObjects[9] = zombiegirl;  
    zombiegirl = new imageclass('assets/Idle (21).png', 0, 0);  
    zombieGirlObjects[9] = zombiegirl;
    zombiegirl = new imageclass('assets/Idle (22).png', 0, 0);
    zombieGirlObjects[9] = zombiegirl;
    zombiegirl = new imageclass('assets/Idle (23).png', 0, 0);
    zombieGirlObjects[9] = zombiegirl;
    zombiegirl = new imageclass('assets/Idle (24).png', 0, 0); 
    zombieGirlObjects[9] = zombiegirl;
    zombiegirl = new imageclass('assets/Idle (25).png', 0, 0);
    zombieGirlObjects[9] = zombiegirl;

    // walk animations
    zombiegirl = new imageclass('assets/Walk (1).png', 0, 0);
    zombieGirlWalkObjects[0] = zombiegirl;
    zombiegirl = new imageclass('assets/Walk (2).png', 0, 0);
    zombieGirlWalkObjects[1] = zombiegirl;
    zombiegirl = new imageclass('assets/Walk (3).png', 0, 0);
    zombieGirlWalkObjects[2] = zombiegirl;
    zombiegirl = new imageclass('assets/Walk (4).png', 0, 0);
    zombieGirlWalkObjects[3] = zombiegirl;
    zombiegirl = new imageclass('assets/Walk (5).png', 0, 0);
    zombieGirlWalkObjects[4] = zombiegirl;
    zombiegirl = new imageclass('assets/Walk (6).png', 0, 0);
    zombieGirlWalkObjects[5] = zombiegirl;
    zombiegirl = new imageclass('assets/Walk (7).png', 0, 0);
    zombieGirlWalkObjects[6] = zombiegirl;
    zombiegirl = new imageclass('assets/Walk (8).png', 0, 0);
    zombieGirlWalkObjects[7] = zombiegirl;
    zombiegirl = new imageclass('assets/Walk (9).png', 0, 0);
    zombieGirlWalkObjects[7] = zombiegirl;
    zombiegirl = new imageclass('assets/Walk (10).png', 0, 0);
    zombieGirlWalkObjects[7] = zombiegirl;

    // fight animations
    zombiegirl = new imageclass('assets/Attack (1).png', 0, 0);
    zombieGirlFightObjects[0] = zombiegirl;
    zombiegirl = new imageclass('assets/Attack (2).png', 0, 0);
    zombieGirlFightObjects[1] = zombiegirl;
    zombiegirl = new imageclass('assets/Attack (3).png', 0, 0);
    zombieGirlFightObjects[2] = zombiegirl;
    zombiegirl = new imageclass('assets/Attack (4).png', 0, 0);
    zombieGirlFightObjects[3] = zombiegirl;
    zombiegirl = new imageclass('assets/Attack (5).png', 0, 0);
    zombieGirlFightObjects[4] = zombiegirl;
    zombiegirl = new imageclass('assets/Attack (6).png', 0, 0);
    zombieGirlFightObjects[5] = zombiegirl;
    zombiegirl = new imageclass('assets/Attack (7).png', 0, 0);
    zombieGirlFightObjects[6] = zombiegirl;
    zombiegirl = new imageclass('assets/Attack (8).png', 0, 0);
    zombieGirlFightObjects[7] = zombiegirl;

   
   //
   
    for (var i = 0; i < zombieGirlObjects.length; i++) {
        animation[i] = zombieGirlObjects[i].getImage();
    }

    for(var i = 0; i < zombieGirlRunObjects.length; i++)
    {
        runanimation[i] = zombieGirlRunObjects[i].getImage();
    }

}

// create the canvas
function setup() {

    createCanvas(1000, 800);
    setInterval(incrementIndex, 100);
}

// display all the frames using the draw function as a loop
function draw() {

    background(12);

    // draw each frame based on the index in the array
    // D KEY
    if(keyIsPressed)
    {
        if(key == "d")
        {
            // continue to display the image
            image(runanimation[j], zombieGirlWalkObjects[j].getX(), zombieGirlWalkObjects[j].getY());
            // this section slows the running down
            counter++;
            if(counter > 5)
            {
                // increment the index "j"
                incrementRunIndex();
                // restart our counter
                counter = 0;
            }   
        }
    }
    else
    {
        image(animation[i], zombieGirlObjects[i].getX(), zombieGirlObjects[i].getY());
    }
    
    //  A KEY
    if(keyIsPressed)
    {
        if(key == "a")
        {
            // continue to display the image
            image(runanimation[j], zombieGirlWalkObjects[j].getX(), zombieGirlWalkObjects[j].getY());
            // this section slows the running down
            counter++;
            if(counter > 5)
            {
                // increment the index "j"
                incrementRunIndex();
                // restart our counter
                counter = 0;
            }   
        }
    }
    else
    {
        image(animation[i], zombieGirlObjects[i].getX(), zombieGirlObjects[i].getY());
    }

    // W KEY
    if(keyIsPressed)
    {
        if(key == "w")
        {
            // continue to display the image
            image(runanimation[j], zombieGirlWalkObjects[j].getX(), zombieGirlWalkObjects[j].getY());
            // this section slows the running down
            counter++;
            if(counter > 5)
            {
                // increment the index "j"
                incrementRunIndex();
                // restart our counter
                counter = 0;
            }   
        }
    }
    else
    {
        image(animation[i], zombieGirlObjects[i].getX(), zombieGirlObjects[i].getY());
    }

    // S KEY
    if(keyIsPressed)
    {
        if(key == "s")
        {
            // continue to display the image
            image(runanimation[j], zombieGirlWalkObjects[j].getX(), zombieGirlWalkObjects[j].getY());
            // this section slows the running down
            counter++;
            if(counter > 5)
            {
                // increment the index "j"
                incrementRunIndex();
                // restart our counter
                counter = 0;
            }   
        }
    }
    else
    {
        image(animation[i], zombieGirlObjects[i].getX(), zombieGirlObjects[i].getY());
    }



    // X KEY
    if(keyIsPressed)
    {
        if(key == "x")
        {
            // continue to display the image
            image(runanimation[j], zombieGirlFightObjects[j].getX(), zombieGirlFightObjects[j].getY());
            // this section slows the running down
            counter++;
            if(counter > 5)
            {
                // increment the index "j"
                incrementRunIndex();
                // restart our counter
                counter = 0;
            }   
        }
    }
    else
    {
        image(animation[i], zombieGirlObjects[i].getX(), zombieGirlObjects[i].getY());
    }


    

}


function incrementIndex()
{
     // increment the index
     i += 1;

     // if it reach the end of the array, start over
     if (i >= animation.length) {
         i = 0;
     }
}

function incrementRunIndex()
{

     // increment the index
     j += 1;

     // if it reach the end of the array start over
     if (j >= runanimation.length) {
         j = 0;
     }
}