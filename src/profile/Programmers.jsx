import React from "react";
import Skills from "./Skill";
import SocialLink from "./Social";

function Programmers() {
  return (
    <div>
      <h3>List of programmers :</h3>

      <h3>Mr.Dave Mauntain</h3>
      <Skills skillA="HTML" skillB="CSS" skillC="BootStarp" skillD="Tawilind" />
      <SocialLink one="Github" two="Youtube" three="Linkdin" />

      <h3>Mr.Roman Reings</h3>
      <Skills skillA="Phython" skillB="Flutter" skillC="Kotlin" />
      <SocialLink one="Behance" two="Dribble" three="Telegram" />
    </div>
  );
}

export default Programmers;
