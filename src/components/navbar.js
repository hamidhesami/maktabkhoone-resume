import React, { Component } from "react";
import Move from "../components/move";
import data from "../data.json";
import store from "../store/index";
import { observer } from "mobx-react";
import "./navbar.css";

@observer
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <Move target="skills" icon={data.icons.down.url}>
          <h1 className="nav-item nav-skills">Skills</h1>
        </Move>

        <Move target="about" icon={data.icons.down.url}>
          <h1 className="nav-item nav-about">About</h1>
        </Move>

        <h1 className="nav-item nav-theme" onClick={() => store.Change()}>
          theme {store.color}
        </h1>
      </div>
    );
  }
}

export default Navbar;
