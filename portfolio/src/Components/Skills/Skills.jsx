import React from "react";
import './Skills.css';
import arrow from '../../images/arrow.png';

export default function Skills() {
  return (
    <div  className="skills">
      <div className="skills-title">
        <h1>My Skills</h1>
      </div>

      
      <div className="skills-container">

        <div className="skills-format">
          <h2 style={{ color: "blueviolet"}}>Frontend</h2><br />
          <h3>HTML</h3>
          <h3>CSS</h3>
          <h3>React</h3>
        </div>

        <div  id='skills'className="skills-more">
          <h2 style={{ color: "blueviolet" }}>
            Programming Languages
          </h2>
          <h3>C++</h3>
          <h3>JavaScript</h3>
        </div>

        <div className="skills-moree">
          <h2 style={{ color: "blueviolet"}}>Design</h2>
          <h3>Figma</h3>
        </div>

      </div>
    </div>
  );
}
