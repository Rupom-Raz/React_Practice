import React, { Component } from "react";

export default class Btn extends Component {
  start = () => {
    if (this.state.count > 0) {
      setInterval(() => {
        this.setState(
          {
            count: this.state.count - 1,
          },
          () => {
            alert("Times Up");
          }
        );
      }, 1000);
    }
  };

  render() {
    return (
      <div className="container">
        <button onClick={this.start} className="btn">
          Start
        </button>
        <button onClick={this.stop} className="btn">
          Stop
        </button>
        <button onClick={this.reset} className="btn">
          Reset
        </button>
      </div>
    );
  }
}
