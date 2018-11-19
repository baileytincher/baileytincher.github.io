import React, { Component } from "react";
import P5Wrapper from "./P5Wrapper/";

const cnvStyle = {
  position:'absolute',
  top:0,
  left:0,
  width:'100%',
  height:'100%',
  zIndex:-1
};

export default class Background extends Component {

  constructor() {
    super();
  }

  onReady = () => this.setState({ status: "ready" });

  render() {
    return (
      <div id="background-anim" className="background-anim" style={cnvStyle}>
        <P5Wrapper
          p5Props={{}}
          onReady={this.onReady}
        />
      </div>
    );
  }
}
