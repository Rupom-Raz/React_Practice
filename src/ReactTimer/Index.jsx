import React, { Component } from "react";
import IncreDecre from "./IncreDecre";
import Btn from "./Btn";
import "./Timer.style.css";

export default class Index extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="heading">Simple Timer</h1>

        <IncreDecre />

        <Btn />
      </div>
    );
  }
}
