import React, { Component } from "react";
import "./style/App.scss";
import Intro from "./components/Intro.js";
import Data from "./components/Data.js";
import statcraft from "./assets/images/statcraft.png";
// import splash1 from './assets/splash1.png';
import splash2 from "./assets/images/splash2.png";

class App extends Component {
  constructor() {
    super();

    this.state = {
      introShown: true
    };
  }

  // ----------
  handleStartClick = () => {
    this.setState({ introShown: false });
  };

  // ----------
  handleHeaderClick = () => {
    this.setState({ introShown: true });
  };

  // ----------
  render() {
    const { introShown } = this.state;
    return (
      <div className="App">
        <img className="statcraft-header" src={statcraft} alt="Statcraft" onClick={this.handleHeaderClick}/>
        <img className="statcraft-splash" src={splash2} alt="Splash" />
        <div className="content">
          {introShown ? (
            <Intro onStartClick={this.handleStartClick} />
          ) : (
            <Data />
          )}
        </div>
      </div>
    );
  }
}

export default App;
