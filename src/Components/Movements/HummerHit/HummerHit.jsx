import React, { Component } from "react";
import "./hummerHit.css";
import { Howl } from "howler";
import hitSound from "../../../assets/emojis/hit.wav";

class HummerHit extends Component {
  constructor(props) {
    super(props);

    this.state = {
      eyeElement: [],
      hitFace: -1,
      hummerDown: false,
    };
  }

  componentDidMount() {
    this.setState({
      eyeElement: document.querySelectorAll(".covid_emoji_eye"),
    });
    let container = document.getElementsByClassName("covid_virus_container");
    container[0].addEventListener("mousemove", (event) => {
      this.state.eyeElement.forEach((eye) => {
        let x = eye.getBoundingClientRect().left + eye.clientWidth / 2;
        let y = eye.getBoundingClientRect().top + eye.clientHeight / 2;
        let radian = Math.atan2(event.pageX - x, event.pageY - y);
        let rot = radian * ((180 / Math.PI) * -1) + 270;
        eye.style.transform = "rotate(" + rot + "deg)";
      });
    });
  }

  handleHit(idx) {
    this.setState({ hitFace: idx });
    let sound = new Howl({
      src: [hitSound],
    });
    sound.play();
  }

  handleClear() {
    this.setState({ hitFace: -1 });
    let element = document.getElementById("hitFace");
    element.removeAttribute("id");
  }

  handleHummer() {
    this.setState({ hummerDown: true });
  }

  clearHummer() {
    this.setState({ hummerDown: false });
    let element = document.getElementById("covid_virus_container");
    element.removeAttribute("id");
  }

  render() {
    let emojis = [{ name: "emoji1" }, { name: "emoji1" }, { name: "emoji1" }];

    return (
      <section
        className="covid_virus_container"
        id={this.state.hummerDown ? "covid_virus_container" : ""}
        onMouseDown={() => this.handleHummer()}
        onClick={() => this.clearHummer()}
      >
        <h2>Do not be happy to see others in trouble</h2>
        <div className="covid_virus">
          {emojis.map((element, idx) => {
            return (
              <div
                className="covid_emoji_head"
                onMouseDown={() => this.handleHit(idx)}
                onClick={() => this.handleClear(idx)}
                id={idx == this.state.hitFace ? "hitFace" : ""}
              >
                <div className="covid_emoji_eyes">
                  <div className="covid_emoji_eye">
                    <div className="eye_black_point"></div>
                  </div>
                  <div className="covid_emoji_eye">
                    <div className="eye_black_point"></div>
                  </div>
                </div>
                <div className="covid_emoji_mouth"></div>
              </div>
            );
          })}
        </div>
      </section>
    );
  }
}

export default HummerHit;
