import React, { Component } from 'react';
import '../style/Data.scss';
import { VictoryPie, VictoryLabel } from 'victory';


class Data extends Component {
  // ----------
  constructor() {
    super();

    this.state = {
      data: []
    }
  }

  // ----------
  componentDidMount() {
    fetch('/api/data').then(res => res.json()).then(data => this.setState({ data }));
  }

  // ----------
  render() {
    const { data } = this.state;
    return (
      <div className="Data Component">
        <div className="data-wrapper brick-1">
        <p>Here is some data. Here is some data. Here is some data .Here is some data .Here is some data .Here is some data</p>
        <VictoryPie width={450} height={450} radius={100} padding={20} style={{ labels: { fill: "white", fontSize: 20, fontWeight: "bold" } }} />
        </div>
        <div className="data-wrapper">
        Data component 2
        </div>
        <div className="data-wrapper">
        Data component 3
        </div>
      </div>
    );
  }
}

export default Data;
