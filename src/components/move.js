import React, { Component } from "react";
import { Link } from "react-scroll";
import "./move.css";

export default class Move extends Component {
  render() {
    const { children } = this.props;

    return (
      <Link
        activeClass="active"
        to={this.props.target}
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={0}
        duration={500}
        delay={0}
        isDynamic={true}
        ignoreCancelEvents={false}
      >
        {children}
        <div className="pos">
          <img src={this.props.icon} className="img" />
        </div>
      </Link>
    );
  }
}
