var x = 0;
var y = 0;
//var x1 = 0.03;
//var z1 = 0.03;
// this will be for size
var z = 0;
let img;
function preload(){
  img = loadImage('assets/2k_sun.jpg');
  img1 = loadImage('assets/2k_mars.jpg');
  img2 = loadImage('assets/2k_earth.jpg');
  img3 = loadImage('assets/2k_jupiter.jpg');
  img4 = loadImage('assets/2k_uranus.jpg');
  img5 = loadImage('assets/2k_venus.jpg');
  img6 = loadImage('assets/2k_neptune.jpg');
  img7 = loadImage('assets/2k_saturn_ring.png');
  img9 = loadImage('assets/2k_stars_milky_way.jpg');
  
}
function setup() {
  createCanvas(1000, 800, WEBGL);
}
// display all the frames using the draw function as a loop
function draw() {
  //pointLight(200,100,50,9,10,170);
  //texture(img9);
  background(0,0,25); 
  image(img9, -1000, -600,); 
  //normalMaterial();
  noStroke();
  // inner torus
  createTorus();
  // all spheres except center
  CreateSphere();
  // outer torus
  createTorus2();
  // center sphere
  CreateSphere1();
  
}

  // only rotates this functions shapes
  //rotateX(frameCount * 0.03);
  //rotateY(frameCount * 0.02);
  
// this creates a single torus
// the 3rd parameter tell how many sides the shape will have
// 4th parameter tells how much depth the shape has
// inner torus and its spheres. 
function createTorus() {
  push();
  translate(10, 10, 120);
  rotateX(frameCount * 0.04);
  rotateY(frameCount * 0.0);
  rotateZ(frameCount * 0.04);
  texture(img7);
  torus(90, 3, 50, 3);
  translate(0,80)
  texture(img6);
  CreateSphere(10);
  translate(0,-180,);
  texture(img5);
  CreateSphere();
  pop();
} 
// outer torus and its spheres.
function createTorus2() {
  push();
  translate(10, 10, 170);
  rotateX(frameCount * 0.03);
  rotateY(frameCount * 0.0);
  rotateZ(frameCount * 0.03);
  texture(img7);
  torus(180, 3, 60, 3);
  translate(100,130);
  texture(img4);
  CreateSphere(10);
  translate(-200,-290);
  texture(img3);
  CreateSphere(10);
  translate(205,10);
  texture(img2);
  CreateSphere(10);
  translate(-290,190);
  texture(img1);
  CreateSphere(10);
  pop();
}     

// this creates a single sphere
// hidden in the middle, this function dictates the size and existence of all other spheres except for the center.
function CreateSphere(){
  push();
  translate(9, 10);
  rotateX(frameCount * 0.04);
  rotateY(frameCount * 0);
  rotateZ(frameCount * 0.0)
  sphere(15);
  pop();
}
// center sphere only this one
function CreateSphere1(){
  push();
  translate(9, 10, 170);
  rotateX(frameCount * 0.04);
  rotateY(frameCount * 0);
  rotateZ(frameCount * 0.0)
  texture(img);
  sphere(33);
  pop();
}
image(img9, -1000, -600);

