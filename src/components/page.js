import React, { Component, Children } from "react";
import "./page.css";

export default class Page extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className={`page ${this.props.className || ""}`} id={this.props.id}>{children}</div>
    );
  }
}
