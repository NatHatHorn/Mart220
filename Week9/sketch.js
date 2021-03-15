// create two variables for textures 
let banana;
let monkey;

// create a variable for the model
let house;

let shapeArray = [];
// create two variables for the translation positions
var boxTranslationX = -100;
var boxTranslationY = -100;

// this function will ensure the assets are loaded prior to setup
function preload() {
  banana = loadImage('assets/bananatexture.jpg');
  monkey = loadImage('assets/monkeytexture.jpg');
  house = loadModel('assets/House.obj', true);
}

// create the canvas of 800 width by 600 height
function setup() {
  createCanvas(800, 700, WEBGL);

  // add two simple shapes to the simple shape array
  shapeArray.push(new shapeclass("box", 150, 150, 150, boxTranslationX, boxTranslationY, 0.02, 0.03, 0, monkey));
  shapeArray.push(new shapeclass("cylinder", 80, 90, 0, 200, 20, 0.01, 0.01, 0, banana));
}

function draw() {

  background(100);
  normalMaterial();
  // this is required to make sure the custom shape will be textured
  image(banana);

  // display the simple shapes
  for (var i = 0; i < shapeArray.length; i++) {
    shapeArray[i].draw(frameCount);
  }

  // add a custom shape
  push();
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  translate(-250, -250);
  texture(banana);
  beginShape();
  vertex(300, 0, 100, 0, 50);
  vertex(200, 0, 50, 1, 120);
  vertex(200, 200, 100, 1, 1);
  vertex(0, 200, 50, 0, 1);
  endShape(CLOSE);
  pop();

  // add a textured sphere
  push();
  translate(-200, -100);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.02);
  texture(monkey);
  sphere(90);
  pop();

  // add a textured torus
  push();
  translate(150, -150);
  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  texture(banana);
  torus(70, 45);
  pop();

  // add a texture model
  push();
  scale(0.7); // Scaled to make model fit into canvas
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.01);
  texture(monkey);
  model(house);
  pop();

   // add a textured cyllinder
   push();
   translate(-250, 150);
   rotateX(frameCount * 0.01);
   rotateY(frameCount * 0.01);
   texture(banana);
   cyllinder(60, 42);
   pop();

  // change the location of the box
  if (mouseIsPressed) {
    boxTranslationX = 0;
    boxTranslationY = 0;
    boxTranslationX = floor(random(600));
    boxTranslationY = floor(random(400));
  }
}