let angle = 0;
let globeImage;

function preload() {
  globeImage = loadImage("img/3648.pg");
}

function setup() {
  createCanvas(800, 600, WEBGL);
}

function draw() {
  background(0);
  texture(globeImage);
  noStroke();
  sphere(200);

  rotateY(angle);
  angle += 0.01;
}

function mousePressed() {
  startX = mouseX;
}

function mouseDragged() {
  let dx = mouseX - startX;
  angle += dx / 100;
  startX = mouseX;
}
