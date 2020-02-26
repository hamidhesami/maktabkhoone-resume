import React, { Component, Children } from "react";
import Page from "../components/page";
import data from "../data.json";
import SkillCards from "../components/skill_cards";
import Snowfall from "react-snowfall";
import Move from "../components/move";
import "../components/skill.css";
import { observer } from "mobx-react";
import store from "../store";

@observer
class Skills extends Component {
  render() {
    return (
      <Page className={`c${store.color}`} id="skills">
        <Snowfall
          color="white"
          style={{ background: "" }}
          snowflakeCount={100}
        />
        <h3>{data.sections[1].title} </h3>

        <div className="cards_wrapper">
          {data.sections[1].items.map(i => {
            return <SkillCards skill={i} />;
          })}
        </div>

        <Move icon={data.icons.up.url} target="socialmedia" />
      </Page>
    );
  }
}

export default Skills;
