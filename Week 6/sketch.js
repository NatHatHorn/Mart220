var zombieGirlObjects;
var result, walkresult;
var Lwalkresult;
var rock;
var fire;
var song;
// random generator
var rx = Math.floor((Math.random()  * 900) + 1);
var ry = Math.floor((Math.random()  * 900) + 1);
var rx2 = Math.floor((Math.random()  * 900) + 1);
var ry2 = Math.floor((Math.random()  * 900) + 1);

function preload() {
  result = loadStrings('assets/characteridle.txt');
  walkresult = loadStrings('assets/characterwalk.txt');
  Lwalkresult = loadStrings('assets/characterwalkleft.txt')
  song = loadSound("worldonfire.mp3");
}

function setup() {
    createCanvas(1000,800); 
    zombieGirlObjects = createSprite(300, 250);
    zombieGirlObjects.addAnimation('idle', result[0], result[result.length-1]);
    zombieGirlObjects.addAnimation('walk', walkresult[0], walkresult[walkresult.length-1]);
    zombieGirlObjects.addAnimation('Lwalk', Lwalkresult[0], Lwalkresult[Lwalkresult.length-1]);
    rock = createSprite(rx, ry);
    fire = createSprite(rx2, ry2,);
    //compact way to add an image
    rock.addImage(loadImage('assets/rock.png'));
    fire.addImage(loadImage('assets/fire.png'));  
}
song.play();


// display all the frames using the draw function as a loop
function draw() 
{
    background(120);
    createBorders(15);
    textSize(16);
    text("EXIT", width - 50, height - 50)
    /*if (characterX > width && characterY > width - 50) {
      fill(0);
      stroke(5);
      textSize(26);
      text("You Win! GG!", width / 2 - 50, height / 2 - 50);
  }
*/
   
    if(keyDown('d'))
    {
      zombieGirlObjects.changeAnimation('idle');
      zombieGirlObjects.velocity.x += .0;
      if(zombieGirlObjects.collide(rock))
      {
        zombieGirlObjects.changeAnimation('idle');
      }

      if(zombieGirlObjects.collide(fire))
      {
        zombieGirlObjects.changeAnimation('idle');
      }

      else {
        zombieGirlObjects.changeAnimation('walk');
        zombieGirlObjects.velocity.x = 3;
      }
    }
    else if (keyDown('a'))
    {
      zombieGirlObjects.changeAnimation('Lwalk');
      zombieGirlObjects.velocity.x -= .1;
      if(zombieGirlObjects.collide(rock))
      {
        zombieGirlObjects.changeAnimation('idle');
      }

      if(zombieGirlObjects.collide(fire))
      {
        zombieGirlObjects.changeAnimation('idle');
      }
    }
    else
    {
      zombieGirlObjects.changeAnimation('idle');
      zombieGirlObjects.velocity.x = 0;
    }




     if(keyDown('s'))
    {
      zombieGirlObjects.changeAnimation('');
      zombieGirlObjects.velocity.y += 0;
      if(zombieGirlObjects.collide(rock))
      {
        zombieGirlObjects.changeAnimation('idle');
      }

      if(zombieGirlObjects.collide(fire))
      {
        zombieGirlObjects.changeAnimation('idle');
      }

      else {
        zombieGirlObjects.changeAnimation('walk');
        zombieGirlObjects.velocity.y = 3;
      }
    }
    else if (keyDown('w'))
    {
      zombieGirlObjects.changeAnimation('Lwalk');
      zombieGirlObjects.velocity.y -= .1;
      if(zombieGirlObjects.collide(rock))
      {
        zombieGirlObjects.changeAnimation('idle');
      }

      if(zombieGirlObjects.collide(fire))
      {
        zombieGirlObjects.changeAnimation('idle');
      }
    }
    else
    {
      zombieGirlObjects.changeAnimation('');
      zombieGirlObjects.velocity.y = 0;
    }

    function createBorders(thickness) {
      fill (10);

      // top border
      rect(0, 0, width, thickness);
      // left border
      rect(0, 0, thickness, height);
      // bottom border
      rect(0, height - thickness, width, thickness);
      // right upper border
      rect(width - thickness, 0, thickness, height - 450);
  }
  

  

    zombieGirlObjects.debug = mouseIsPressed;
    rock.debug = mouseIsPressed;
    drawSprites();
}