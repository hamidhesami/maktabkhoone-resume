import React, { Component, Children } from "react";
import Page from "../components/page";
import { SocialIcon } from "react-social-icons";
import data from "../data.json";
import Move from "../components/move";
import Snowfall from "C:/Users/Hamid Hesami/Desktop/resume/node_modules/react-snowfall";
import store from "../store/index"
import "./socialmedia.css";
import { observer } from "mobx-react";

@observer
class Socialmedia extends Component {
  render() {
    return (
      <Page className={`a${store.color}`} id="socialmedia">
        <Snowfall
          color="white"
          style={{ background: "" }}
          snowflakeCount={100}
        />
        <h1 className="title">{data.title}</h1>

        <h2 style={{ textAlign: "center" }}>{data.subtitle}</h2>

        <div className="icons">
          {Object.keys(data.links).map(key => (
            <div className="icon">
              <SocialIcon url={data.links[key]} />
            </div>
          ))}
        </div>

        <Move icon={data.icons.down.url} target="about" />
      </Page>
    );
  }
}

export default Socialmedia