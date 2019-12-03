import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div style={{
        height: "75vh",
        fontFamily: "monospace",
        letterSpacing: "1.5px",
        fontSize: 24
      }}
        className="container valign-wrapper">
        <div className="row">
          <div className="landing-copy col s12 center-align">

            Testing Dog.ceo api; The internet's biggest collection
    of open source dog pictures.
        </div>
        </div>
      </div>
    );
  }
}

export default Landing;
