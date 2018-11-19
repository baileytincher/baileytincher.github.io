export default function(p) {
  let onReady = () => {};
  let props = {};
  var ds;

  p.setup = function() {
    p.createCanvas(p.windowWidth, p.windowHeight);
    ds = new PenroseLSystem();
    p.pixelDensity(p.displayDensity());
    ds.simulate(4);

  };

  p.windowResized = function() {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };

  p.draw = function() {
    ds.render(props.color);
  };

  p.setOnReady = function(cb) {
    onReady = cb;
  };

  p.pushProps = function(_props) {
    props = _props;
  };

  function PenroseLSystem() {
    this.steps = 0;

    //these are axiom and rules for the penrose rhombus l-system
    //a reference would be cool, but I couldn't find a good one
    this.axiom = "[X]++[X]++[X]++[X]++[X]";
    this.ruleW = "YF++ZF----XF[-YF----WF]++";
    this.ruleX = "+YF--ZF[---WF--XF]+";
    this.ruleY = "-WF++XF[+++YF++ZF]-";
    this.ruleZ = "--YF++++WF[+ZF++++XF]--XF";

    //please play around with the following two lines
    this.startLength = Math.sqrt(p.windowWidth * p.windowHeight);
    this.theta = Math.PI * 2 / 10.0; //36 degrees, try TWO_PI / 6.0, ...
    this.reset();
  }

  PenroseLSystem.prototype.simulate = function(gen) {
    while (this.getAge() < gen) {
      this.iterate(this.production);
    }
  }

  PenroseLSystem.prototype.reset = function() {
    this.production = this.axiom;
    this.drawLength = this.startLength;
    this.generations = 0;
  }

  PenroseLSystem.prototype.getAge = function() {
    return this.generations;
  }

  //apply substitution rules to create new iteration of production string
  PenroseLSystem.prototype.iterate = function() {
    var newProduction = "";

    for (var i = 0; i < this.production.length; ++i) {
      var step = this.production.charAt(i);
      //if current character is 'W', replace current character
      //by corresponding rule
      if (step == 'W') {
        newProduction = newProduction + this.ruleW;
      } else if (step == 'X') {
        newProduction = newProduction + this.ruleX;
      } else if (step == 'Y') {
        newProduction = newProduction + this.ruleY;
      } else if (step == 'Z') {
        newProduction = newProduction + this.ruleZ;
      } else {
        //drop all 'F' characters, don't touch other
        //characters (i.e. '+', '-', '[', ']'
        if (step != 'F') {
          newProduction = newProduction + step;
        }
      }
    }

    this.drawLength = this.drawLength * 0.6;
    this.generations++;
    this.production = newProduction;
  }
  //convert production string to a turtle graphic
  PenroseLSystem.prototype.render = function(color) {
    p.translate(p.width / 2, p.height / 2);

    this.steps += 20;
    if (this.steps > this.production.length) {
      this.steps = this.production.length;
    }

    for (var i = 0; i < this.steps; ++i) {
      var step = this.production.charAt(i);

      //'W', 'X', 'Y', 'Z' symbols don't actually correspond to a turtle action
      if (step == 'F') {
        p.stroke('rgba(10%,10%,100%,0.005)');
        for (var j = 0; j < this.repeats; j++) {
          p.line(0, 0, 0, -this.drawLength);
          p.noFill();
          p.translate(0, -this.drawLength);
        }
        this.repeats = 1;
      } else if (step == '+') {
        p.rotate(this.theta);
      } else if (step == '-') {
        p.rotate(-this.theta);
      } else if (step == '[') {
        p.push();
      } else if (step == ']') {
        p.pop();
      }
    }
  }

}
