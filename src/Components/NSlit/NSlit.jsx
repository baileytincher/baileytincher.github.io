import React, { Component } from "react";
import P5Wrapper from "./P5Wrapper/";

export default class NSlit extends Component {

  constructor() {
    super();
    this.nano = Math.pow(10, -9);
    this.micro = Math.pow(10, -6);
    this.state = { status: "", slidera: this.micro, slidern: 2, sliderd: this.micro, sliderl: 490 * this.nano, slideri: 5, diffraction: false };
  }

  onReady = () => this.setState({ status: "ready" });

  onSlideraChange = (event) => { this.setState({ slidera: +event.target.value }) };
  onSlidernChange = (event) => { this.setState({ slidern: +event.target.value }) };
  onSliderdChange = (event) => { this.setState({ sliderd: +event.target.value }) };
  onSliderlChange = (event) => { this.setState({ sliderl: +event.target.value }) };
  onSlideriChange = (event) => { this.setState({ slideri: +event.target.value }) };
  onInterChange = (event) => {this.setState({ diffraction: false }) };
  onDiffChange = (event) => {this.setState({ diffraction: true }) };


  render() {
    return (
      <div id="nslit" className="nslit">
        <P5Wrapper
          p5Props={{ slidern: this.state.slidern, sliderd: this.state.sliderd, sliderl: this.state.sliderl, slideri: this.state.slideri, diffraction: this.state.diffraction, slidera: this.state.slidera }}
          onReady={this.onReady}
        />

        <br />
        <div style={{ textAlign: "center" }}>
          <input type="radio"
            name="Interference"
            value="Interference"
            defaultChecked
            onClick={ this.onInterChange }
          />Interference
          <input type="radio"
            name="Interference"
            value="Diffraction"
            onClick={ this.onDiffChange }
          />Diffraction
          <br />
          <strong>(Number of Slits) n: {this.state.slidern + " slits" }</strong>
          <br />
          <input type="range"
            min={1} max={10} step={1}
            value={this.state.slidern}
            style={{ width: "90%", maxWidth: "900px" }}
            onChange={this.onSlidernChange}
          />
          <br />
          <strong>(Slit Width) a: { (this.state.slidera / this.micro).toFixed(2) + " micrometers" }</strong>
          <br />
          <input type="range"
            min={50 * this.nano} max={ 5 * this.micro } step={.05 * this.micro}
            value={this.state.slidera}
            style={{ width: "90%", maxWidth: "900px" }}
            onChange={this.onSlideraChange}
          />
          <br />
          <strong>(Distance Between Slits) d: { (this.state.sliderd / this.micro).toFixed(2) + " micrometers" }</strong>
          <br />
          <input type="range"
            min={50 * this.nano} max={25 * this.micro} step={.5 * this.micro}
            value={this.state.sliderd}
            style={{ width: "90%", maxWidth: "900px" }}
            onChange={this.onSliderdChange}
          />
          <br />
          <strong>(Wavelength) lambda: {(this.state.sliderl / this.nano).toFixed(1) + " nanometers"}</strong>
          <br />
          <input type="range"
            min={50 * this.nano} max={this.micro} step={25 * this.nano}
            value={this.state.sliderl}
            style={{ width: "90%", maxWidth: "900px" }}
            onChange={this.onSliderlChange}
          />
          <br />
          <strong>(Source Intensity) Io: {this.state.slideri + " watts/m^2"}</strong>
          <br />
          <input type="range"
            min={0} max={20} step={1}
            value={this.state.slideri}
            style={{ width: "90%", maxWidth: "900px" }}
            onChange={this.onSlideriChange}
          />
        </div>
        <p style={{ textAlign: "center" }}>
          <a href="https://github.com/baileytincher/N-Slit-Visualization">
            <img border="0" alt="github logo" src="/images/github-logo.png" width="auto" height="36" style={{ verticalAlign: "middle" }}/>
          </a>
        </p>
      </div>
    );
  }
}
