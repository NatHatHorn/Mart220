var x = 0;
var y = 0;

function setup() {
  createCanvas(800, 600, WEBGL);
}

// display all the frames using the draw function as a loop
function draw() {
  background(100);
  //normalMaterial();
  directionalLight(0,20,250,300,-300);
  directionalLight(250,0,0,-300,-300)
  noStroke();
  

  // big box
  createBox(100, 100, 100, -230, -140, true);
  //donut
  createTorus();
  // lil box
  createBox(50, 50, 50, 210, 160, true);
  // sphere
  CreateSphere();
  // cylinder
  CreateCylinder();

  if (keyIsPressed) {
    if (key == 'd') { // move the right
      x += 3;

    } else if (key == 'a') { // move to the left

      x -= 3;

    }
  }

  if (keyIsPressed) {
    if (key == 'w') { // move the right
      y -= 3;

    } else if (key == 's') { // move to the left

      y += 3;

    }
  }

  if (keyIsPressed) {
    if (key == 'ArrowRight') { // move the right
      z += 5;

    } else if (key == 'ArrowLeft') { // move to the left

      z -= 5;

    }
  }
}

// this allows us to create any type of box
function createBox(w, h, d, transX, transY, move) {
  push();
  if (move) {
    translate(transX + x, transY + y);
  } else {
    translate(transX, transY);
  }

  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.02);
  box(w, h, d);
  pop();
}

// this creates a single torus
function createTorus() {
  push();
  translate(10, 10);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.07);
  torus(50, 15, 24, 16);
  pop();
}   

function CreateSphere(){
  push();
  ambientMaterial(255);
  translate(-230, 130);
  rotateX(frameCount * 0.1);
  rotateY(frameCount * 0.1);
  sphere(70);
  pop();
}

function CreateCylinder(){
  push();
  translate(200,-150);
  rotateY(frameCount * 0.02);
  rotateX(frameCount * 0.04);
  cylinder(40, 90);
  pop();
}