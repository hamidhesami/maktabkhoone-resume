import React, { Component } from "react";
import "./skill.css"

export default class SkillCards extends Component {
  render() {
    const { skill } = this.props;
    return (
      <div className="card">
        <div className="image-wrapper">
          <img
            src={skill.content.img}
            alt={skill.content.title}
            className="image"
          />
        </div>

        <div className="skill-title">
          <h4>{skill.content.title}</h4>
        </div>
      </div>
    );
  }
}
