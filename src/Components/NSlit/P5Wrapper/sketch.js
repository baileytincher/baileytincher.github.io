export default function(p) {
  let onReady = () => {};
  let props = {};

  function interference_curve(num_slits, slit_dist, wavelength, max_intensity, theta) {
    var k = 2 * Math.PI / wavelength;
    var phi = k * slit_dist * Math.sin(theta);
    var intensity = max_intensity * Math.pow((Math.sin(num_slits * phi / 2) / Math.sin(phi / 2)), 2);

    return intensity;
  }

  function diffraction_curve(num_slits, slit_dist, slit_width, wavelength, max_intensity, theta) {
    var beta = 2 * Math.PI * slit_width * Math.sin(theta) / wavelength;
    var diff_part = Math.sin(beta / 2) / (beta / 2);
    var intensity = Math.pow(diff_part, 2) *interference_curve(num_slits, slit_dist, wavelength, max_intensity, theta);

    return intensity;
  }

  p.setOnReady = function(cb) {
    onReady = cb;
  };

  p.pushProps = function(_props) {
    props = _props;
  }

  p.setup = function() {
    onReady();
    let cnvWidth = Math.min(900, p.windowWidth * 0.9);
    let cnvHeight = cnvWidth * 2 / 3;
    p.createCanvas(cnvWidth, cnvHeight);
    console.log("::: displayDensity:", p.displayDensity());
    console.log("::: pixelDensity:", p.pixelDensity());
    p.pixelDensity(p.displayDensity());
  }

  p.windowResized = function() {
      let cnvWidth = Math.min(900, p.windowWidth * 0.9);
      let cnvHeight = cnvWidth * 2 / 3;
      p.resizeCanvas(cnvWidth, cnvHeight);
  }

  p.draw = function() {
    p.clear();

    let n = props.slidern;
    let d = props.sliderd;
    let lambda = props.sliderl;
    let Io = props.slideri;
    let diff = props.diffraction;
    let a = props.slidera;

    p.strokeWeight(2);
    p.stroke(0, 61, 153);

    p.beginShape();
    if (diff) {
      for (var theta_ = -Math.PI / 4; theta_ <= Math.PI / 4; theta_ += (Math.PI / 800)) {
        var x = p.width/2 + Math.sin(theta_) * p.width / 1.41;
        var y = p.height - (p.height / 4 + diffraction_curve(n, d, a, lambda, Io, theta_));
        p.curveVertex(x, y);

      }
    } else {
      for (var theta_ = -Math.PI / 4; theta_ <= Math.PI / 4; theta_ += (Math.PI / 800)) {
        var x = p.width/2 + Math.sin(theta_) * p.width / 1.41;
        var y = p.height - (p.height / 4 + interference_curve(n, d, lambda, Io, theta_));
        p.curveVertex(x, y);

      }
    }

    p.endShape();
  }

  p.mousePressed = function() {
    p.redraw();
  }
}
