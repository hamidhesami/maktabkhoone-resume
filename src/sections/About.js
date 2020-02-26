import React, { Component, Children } from "react";
import Page from "../components/page";
import data from "../data.json";
import Move from "../components/move";
import Snowfall from "react-snowfall";
import "./About.css";
import { observer } from "mobx-react";
import store from "../store";

@observer
class About extends Component {
  render() {
    return (
      <Page className={`b${store.color}`} id="about">
        <Snowfall
          color="white"
          style={{ background: "" }}
          snowflakeCount={100}
        />
        <h1 className="h3" id="about">
          {" "}
          {data.sections[0].title}
        </h1>
        {data.sections[0].items.map(i => (
          <p>{i.content}</p>
        ))}

        <Move icon={data.icons.down.url} target="skills" />
      </Page>
    );
  }
}

export default About