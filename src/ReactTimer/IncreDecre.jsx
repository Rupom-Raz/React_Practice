import React, { Component } from "react";

export default class IncreDecre extends Component {
  state = {
    count: 0,
  };

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

  render() {
    return (
      <div>
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
    );
  }
}
