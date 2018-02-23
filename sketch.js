var stars = [];

var speed;

function setup() {
  createCanvas(windowWidth,windowHeight);
  for (var i = 0; i < 800; i++) {
    stars[i] = new Star();
  }
}

function draw() { 
  speed = map(mouseY, 0, height, 0, 40);

  background(230, 230, 230);
  translate(width / 2, height / 2);
  for (var i = 0; i < stars.length; i++) {
    stars[i].update();
    stars[i].show();
  }
}

function resize() {
  canvas.width = document.body.offsetWidth;
  canvas.height = document.body.scrollHeight;
  setup();
}
window.addEventListener('orientationchange', resize, true);
window.addEventListener('resize', resize, true);


