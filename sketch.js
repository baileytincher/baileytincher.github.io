// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/17WoOqgXsRM

var stars = [];

var speed;

function setup() {
	createCanvas(windowWidth,windowHeight);
  for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
}

function draw() {
  if (mouseX > width / 2) {
  speed = map(mouseX, 0, width / 2, 50, 0);

  speed = map(mouseX, width / 2, width, 0, 50);

  background(0);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}
