//List Variables                        //PROBLEMS
                                        // NO IDLE STATE
// arrays to hold my images             // DOESNT MOVE ACROSS SCREEN
                                        // PICTURE CUTS OUT
                                        // need to be able to go up and down
                                        // add 1 or 2 still pictures
var animation = [];
var runanimation = [];
var leftrunanimation = [];
var currentAnimation;
// arrays to hold my objects
var zombieGirlObjects = [];
var zombieGirlWalkObjects = [];
var zombieGirlLeftWalkObjects = [];
var img;
var img2;
var currentObjects;
// vars to hold the strings read in from a file
var result;
var walkresult;
var walkresultleft;
var stillimages;
// var that will iterate over animations and objects 
var counter = 10; 
// var used when creating an interval
var myInterval;
// var to slow movement animations down
var index = 20;
//Still Images
var rx = Math.floor((Math.random()  * 700) + 1);
var ry = Math.floor((Math.random()  * 700) + 1);
var rx2 = Math.floor((Math.random()  * 700) + 1);
var ry2 = Math.floor((Math.random()  * 700) + 1);



// read in all files and populate string arrays from assets
function preload() {
    result = loadStrings('assets/characteridle.txt');
    walkresult = loadStrings('assets/characterwalk.txt');
    walkresultleft = loadStrings('assets/characterwalkleft.txt');
    stillimages = loadStrings('assets/stillimages.txt');

}

// create the canvas
function setup() {
createCanvas(800, 800);

img = loadImage('assets/heart.png');
img2 = loadImage('assets/skull.png');

// create all idle objects and set animation array
for (var i = 0; i < result.length; i++)
{
zombieGirlObjects.push(new imageclass('assets/'  + result[i], 0, 0));
animation[i] = zombieGirlObjects[i].getImage();
}
// create both movement to right and left and animations in this loop
for (var i = 0; i < walkresult.length; i++)
{
    zombieGirlWalkObjects.push(new imageclass('assets/' + walkresult[i], 0, 0));
    runanimation[i] = zombieGirlWalkObjects[i].getImage();
    zombieGirlLeftWalkObjects.push(new imageclass('assets/' + walkresultleft[i], 0, 0));
    leftrunanimation[i] = zombieGirlLeftWalkObjects[i].getImage();

}
// assign the idle objects to the generic object var
currentObjects = zombieGirlObjects;
// create interval for idle animation
myInterval = setInterval(incrementIndex, 30); // Controls speed of animation
}

// display all the frames using the draw function as a loop
function draw() {

    background(62);

image(img, rx, ry, 300, 200); 
image(img2, rx2, ry2, 170, 170);
    
    // draw each frame based on the index in the array
    // D KEY
    if(keyIsPressed)
    {
        // stop idle interval 
        clearInterval(myInterval);
        // set the var to null??
        myInterval = null;
        // use if statement to slow movement animations down
        index++;
        if (index > 5) // THIS HAS SOMETHING TO DO WITH WITH THE CHARACTER MOVING ACROSS THE SCREEN
        {
            incrementIndex();
            index = 0;
        }

        // move right
        if(key == "d")
        {
            // assign the generic animation object vars
            currentAnimation = runanimation;
            currentObjects = zombieGirlWalkObjects;
         
            // make sure to not go over the size of the arrays
            // idle has 10 and movement has 8
            if (counter >= currentAnimation.length)
            {
                counter = 0;
            }
            // move animation by updating the x
            currentObjects[counter].setX(currentObjects[counter].getX() + 4);
            // make sure to assign the x component of the left movement too
            for (var i = 0; i < zombieGirlLeftWalkObjects.length; i++)
            {
                zombieGirlLeftWalkObjects[i].setX(currentObjects[0].getX());
            }

            // make sure movement object is assigned to current object again
            zombieGirlWalkObjects = currentObjects;

            // opposite of above characters move left
        }
        
        
        else if (key == "a")
        {
            currentAnimation = leftrunanimation;
            currentObjects = zombieGirlLeftWalkObjects;

            if (counter >= currentAnimation.length)
            {
                counter = 0;
            }
            currentObjects[counter].setX(currentObjects[counter].getX() - 4);
                for (var i = 0; i < zombieGirlObjects.length; i++)
               {
                 zombieGirlObjects[i].setX(currentObjects[0].getX());
               }

               zombieGirlLeftWalkObjects = currentObjects;
        }

        for (var i = 0; i < zombieGirlObjects.length; i++)
            zombieGirlObjects[i].setX(currentObjects[0].getX());

                 // UP AND DOWN KEY CODES
            if(key == "w")
            {
                // assign the generic animation object vars
                currentAnimation = runanimation;
                currentObjects = zombieGirlWalkObjects;
             
                // make sure to not go over the size of the arrays
                // idle has 10 and movement has 8
                if (counter >= currentAnimation.length)
                {
                    counter = 0;
                }
                // move animation by updating the x
                currentObjects[counter].setY(currentObjects[counter].getY() - 4);
                // make sure to assign the x component of the left movement too
                for (var i = 0; i < zombieGirlLeftWalkObjects.length; i++)
                {
                    zombieGirlLeftWalkObjects[i].setY(currentObjects[0].getY());
                }
    
                // make sure movement object is assigned to current object again
                zombieGirlWalkObjects = currentObjects;
    
                // opposite of above characters move left
            }
            
            
            else if (key == "s")
            {
                currentAnimation = leftrunanimation;
                currentObjects = zombieGirlLeftWalkObjects;
    
                if (counter >= currentAnimation.length)
                {
                    counter = 0;
                }
                currentObjects[counter].setY(currentObjects[counter].getY() + 4); // THIS NUMBER REPRESSENTS HOW MANY PIXELS TO MOVE
                    for (var i = 0; i < zombieGirlObjects.length; i++)
                   {
                     zombieGirlObjects[i].setY(currentObjects[0].getY());
                   }
    
                   zombieGirlLeftWalkObjects = currentObjects;
            }
    
            for (var i = 0; i < zombieGirlObjects.length; i++)
                zombieGirlObjects[i].setX(currentObjects[0].getX()); 
    }


    
    // this part checks for the idle and resets animations
    else{
        if (myInterval == null)
        {
            myInterval = setInterval(incrementIndex, 50);
        }
        currentObjects = zombieGirlObjects;
        currentAnimation = animation;
    }

    // displays images regardless of movement or idle
    image(currentAnimation[counter], currentObjects[counter].getX(), currentObjects[counter].getY());
    
}

function incrementIndex()
{
    // increment the index
    counter += 12;
    //reaches the end of the array starts over
    if (counter >= currentObjects.length)
    {
        counter = 3;
    }
}


            



   




