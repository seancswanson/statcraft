import React, { Component } from 'react';
import '../style/Intro.scss';


class Intro extends Component {
  // ----------
  render() {
    return (
      <div className="Intro Component">
      <div className="intro-container">
      <h1>Welcome!</h1>
      <hr className="thick"></hr>
      <p>Click [START] to explore some neato statistics surrounding one of the most popular games ever made.</p>
      <button className="start-button">START</button>
      </div>
      </div>
    );
  }
}

export default Intro;
