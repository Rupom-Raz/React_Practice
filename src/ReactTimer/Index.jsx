import React, { Component } from "react";
import "./Timer.style.css";

export default class Index extends Component {
  state = {
    count: 0,
  };
  intervalId = null;

  increment = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  start = () => {
    if (this.state.count > 0 && !this.intervalId) {
      this.intervalId = setInterval(() => {
        this.setState(
          {
            count: this.state.count - 1,
          },
          () => {
            if (this.state.count === 0) {
              alert("Times Up ");
              clearInterval(this.intervalId);
              this.intervalId = null;
            }
          }
        );
      }, 1000);
    }
  };

  stop = () => {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };

  reset = () => {
    this.setState({ count: 0 });
    clearInterval(this.intervalId);
    this.intervalId = null;
  };

  render() {
    return (
      <div className="App">
        <h2 className="heading">Simple Timer</h2>
        <div className="container">
          <button onClick={this.increment} className="btn">
            +
          </button>
          <span className="text">{this.state.count}</span>
          <button
            onClick={this.decrement}
            className="btn"
            disabled={this.state.count === 0 ? true : false}
          >
            -
          </button>
        </div>
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
      </div>
    );
  }
}
