import React, { Component } from "react";
import { render } from "react-dom";
// import image from "../images/jumbotron-image.jpg";

const jumboStyle = {
  background: "rgba(204, 204, 204, 0.75)",
  padding: "2.5em"
};

const headerStyle = {
  opacity: "1 !important",
  fontFamily: "Arial, Helvetica, sans-serif",
  color: "#3b2004",
  border: "0.15px solid grey",
  padding: "2em",
  textShadow: "0.75px 1px whitesmoke"
};

class Jumbotron extends Component {
  render() {
    return (
      <div>
        <div
          className="jumbotron jumbotron-fluid"
          style={jumboStyle}
          id="jumbo"
        >
          <div className="container" style={headerStyle} id="header-content">
            <h1 className="display-3">Coding is Hard</h1>
            <p className="lead">
              A personal blog venturing through the trials and successes of
              learning code.
            </p>
            <p className="lead">By Payton Haisten</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
