import React, { Component } from "react";
import Bio from "./Bio";
import Skills from "./Skill";
import SocialLink from "./Social";
import "./profile.style.css";
import Programmers from "./Programmers";

export default class index extends Component {
  render() {
    return (
      <div className="container">
        <Bio />
        <Skills skillA = "Java" skillB = "JavaScript" skillC = "React" skillD = "Android"/>
        <SocialLink  one= "Faccbook" two = "Twitter" three = "Instagram" />
        <Programmers  />
      </div>
    );
  }
}
