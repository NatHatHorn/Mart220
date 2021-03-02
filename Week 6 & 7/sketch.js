var zombieGirlObjects;
var result, walkresult;
var Lwalkresult;
var attackresult;
var rock;
var fire;
var song;
const particles = [];
var health = 100;

// random generator
var rx = Math.floor((Math.random()  * 900) + 1);
var ry = Math.floor((Math.random()  * 900) + 1);
var rx2 = Math.floor((Math.random()  * 900) + 1);
var ry2 = Math.floor((Math.random()  * 900) + 1);

function preload() {
  result = loadStrings('assets/characteridle.txt');
  walkresult = loadStrings('assets/characterwalk.txt');
  Lwalkresult = loadStrings('assets/characterwalkleft.txt');
  attackresult = loadStrings('assets/characterattack.txt');
  song = loadSound("worldonfire.mp3");
}

function setup() {
    createCanvas(1000,800); 
    zombieGirlObjects = createSprite(300, 250);
    zombieGirlObjects.addAnimation('idle', result[0], result[result.length-1]);
    zombieGirlObjects.addAnimation('walk', walkresult[0], walkresult[walkresult.length-1]);
    zombieGirlObjects.addAnimation('Lwalk', Lwalkresult[0], Lwalkresult[Lwalkresult.length-1]);
    zombieGirlObjects.addAnimation('attack', attackresult[0], attackresult[attackresult.length-1]);
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
    background(0);
    createBorders(12);
    textSize(16);
    text("EXIT", width - 50, height - 50)
    /*if (characterX > width && characterY > width - 50) {
      fill(0);
      stroke(5);
      textSize(26);
      text("You Win! GG!", width / 2 - 50, height / 2 - 50);
  }
*/
   // d key
     if(keyDown('d'))
    {
      zombieGirlObjects.changeAnimation('walk');
      zombieGirlObjects.velocity.x += 0.2;
      
      if (rock != null)
      {
      if(zombieGirlObjects.collide(rock))
      {
        zombieGirlObjects.changeAnimation('idle');
      }
      }
     
      if (fire != null)
      {
      if(zombieGirlObjects.collide(fire))
      {
        zombieGirlObjects.changeAnimation('idle');
      }
      }
      else {
        zombieGirlObjects.changeAnimation('');
        zombieGirlObjects.velocity.x = 0;
      }
    }
   
    // a key
    else if (keyDown('a'))
    {
      zombieGirlObjects.changeAnimation('Lwalk');
      zombieGirlObjects.velocity.x -= .2;

      if(rock != null)
      {
      if(zombieGirlObjects.collide(rock))
      {
        zombieGirlObjects.changeAnimation('idle');
      }
      }
      if(fire != null)
      {
      if(zombieGirlObjects.collide(fire))
      {
        zombieGirlObjects.changeAnimation('idle');
      }
    }
    }
    else
    {
      zombieGirlObjects.changeAnimation('idle');
      zombieGirlObjects.velocity.x = 0;
    }



    // s key
      if(keyDown('s'))
    {
      zombieGirlObjects.changeAnimation('walk');
      zombieGirlObjects.velocity.y += 0.2;
      
      if (rock != null)
      {
      if(zombieGirlObjects.collide(rock))
      {
        zombieGirlObjects.changeAnimation('idle');
      }
      }
      if (fire != null)
      {
      if(zombieGirlObjects.collide(fire))
      {
        zombieGirlObjects.changeAnimation('idle');
      }
    }
      else {
        zombieGirlObjects.changeAnimation('');
        zombieGirlObjects.velocity.y = 1;
      }
    }

    // w key
    else if (keyDown('w'))
    {
      zombieGirlObjects.changeAnimation('Lwalk');
      zombieGirlObjects.velocity.y -= .2;

      if (rock != null)
      {
      if(zombieGirlObjects.collide(rock))
      {
        zombieGirlObjects.changeAnimation('idle');
      }
      }
      if (fire != null)
      {
      if(zombieGirlObjects.collide(fire))
      {
        zombieGirlObjects.changeAnimation('idle');
      }
      }
    }
    else
    {
      zombieGirlObjects.changeAnimation('');
      zombieGirlObjects.velocity.y = 0;
    }
  

   if(keyDown('x'))
    {
      zombieGirlObjects.changeAnimation('attack');
     
      if(rock != null)
      {
        if(dist(zombieGirlObjects.position.x,zombieGirlObjects.position.y,rock.position.x,rock.position.y) < 320)
        {
          createParticles(rock.position.x, rock.position.y);
          health -= 1;
          if(health <= 0)
          {
            rock.remove();
            rock = null;
          }
       
        }
      }

      if(fire != null)
      {
        if(dist(zombieGirlObjects.position.x,zombieGirlObjects.position.y,fire.position.x,fire.position.y) < 320)
        {
          createParticles(fire.position.x, fire.position.y);
          health -= 1;
          if(health <= 0)
          {
           fire.remove();
            fire = null;
          }
       
        }
      }
      
      
    }
    // Game end message
    if ( fire.health,rock.health <= 0){
      textSize(20);
      text("You Win!", 100, 100);
    }
   
   
    function createBorders(thickness) {
      fill (213, 8, 66);

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
    fire.debug = mouseIsPressed;
    drawSprites();
}

function createParticles(x,y)
{
for (let i = 0; i < 10; i++) {
    let p = new Particle(x,y);
    particles.push(p);
  }
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update();
    particles[i].show();
    if (particles[i].finished()) {
      // remove this particle
      particles.splice(i, 1);
    }
  }

}