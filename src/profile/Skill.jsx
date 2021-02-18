import React from "react";

function Skill(props) {
  let { skillA, skillB, skillC, skillD } = props;

  return (
    <div>
      <div className="skill">
        <h3>Skills: </h3>
        <ul>
          <li>{skillA}| </li>
          <li>{skillB}| </li>
          <li>{skillC}| </li>
          <li>{skillD}</li>
        </ul>
      </div>
    </div>
  );
}

export default Skill;
