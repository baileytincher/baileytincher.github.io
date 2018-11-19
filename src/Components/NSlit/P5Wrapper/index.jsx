import React, { Component } from "react";
import PropTypes from "prop-types";
import sketch from "./sketch.js";

class P5Wrapper extends Component {
  static propTypes = {
    p5Props: PropTypes.object.isRequired,
    onReady: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.canvas = new window.p5(sketch, "app-p5_container");
    this.canvas.setOnReady(this.props.onReady);
    this.forceUpdate();
  }

  componentDidUpdate(nextProps) {
    this.canvas.pushProps({ ...this.props.p5Props });
    this.setState();
    console.log("Updating props sent to canvas");

  }

  shouldComponentUpdate() { // just in case :)
    this.forceUpdate();
    return false;
  }

  componentWillUnmount() {
    this.canvas.remove();
  }

  render() {
    return (
      <div
        id="app-p5_container"
        style={{ width: "100%", textAlign: "center" }}
      />
    );
  }
}

export default P5Wrapper;
