function Star() {
  var red = random(255);
  var blue = random(255);
  var green = random(255);
  this.x = random(-width, width);
  this.y = random(-height, height);
  this.z = random(width);
  this.pz = this.z;
  var counter = 0;
  var alpha = Math.random(255);

  this.update = function() {
    this.z = this.z - speed;
    if (this.z < 1) {
      this.z = width;
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.pz = this.z;
    }
  }

  this.show = function() {
	counter++;
	if (counter > 100) {
		alpha = Math.random(255);
		counter = 0;
	}
	
    fill(red, blue, green, alpha);
    //noStroke();

    var sx = map(this.x / this.z, 0, 1, 0, width);
    var sy = map(this.y / this.z, 0, 1, 0, height);

    var r = map(this.z, 0, width, 16, 0);
    ellipse(sx, sy, r, r);

    var px = map(this.x / this.pz, 0, 1, 0, width);
    var py = map(this.y / this.pz, 0, 1, 0, height);

    this.pz = this.z;

    stroke(red, blue, green, alpha);
    line(px, py, sx, sy);

  }
}
