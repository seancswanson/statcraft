import React, { Component } from 'react';
import { Button } from "nes-react";

import '../style/Intro.scss';


class Intro extends Component {
  // ----------
  render() {
      const { onStartClick } = this.props;
    return (
      <div className="Intro Component">
      <div className="intro-container">
      <h2>Welcome!</h2>
      <hr className="thick"></hr>
      <p>Click [START] to explore some neato statistics surrounding one of the most popular games ever made.</p>
      <p>I am in no way, shape, or form affiliated with Microsoft, Mojang, or Minecraft and am just doing this for fun!</p>
      <p>I created this project as an exploration of data visualization in React using Victory.js, please enjoy!</p>
      <p>Comments, questions and criticism welcomed! You can find me at <a href="http://seancswanson.com" alt="my portfolio site">seancswanson.com</a> and on <a href="https://github.com/seanthaswan" alt="GitHub">GitHub</a>.</p>
      <p className="signature">From Seattle with ♥, <span className="signature-name">Sean</span></p>
      <Button onClick={onStartClick}>Start</Button>
      </div>
      </div>
    );
  }
}

export default Intro;
