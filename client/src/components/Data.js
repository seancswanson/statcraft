import React, { Component } from "react";
import "../style/Data.scss";
import { VictoryPie, VictoryChart, VictoryBar } from "victory";

class Data extends Component {
  // ----------
  constructor() {
    super();

    this.state = {
      data: []
    };
  }

  // ----------
  componentDidMount() {
    fetch("/api/data")
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  // ----------
  render() {
    const { data } = this.state;
    return (
      <div className="Data Component">
        <div className="brick" id="brick-1">
          <h2>5 Biggest Acquisitions by Microsoft</h2>
          <div className="data-wrapper">
            <p>
              Mojang, and the entirety of Minecraft IP was acquired by Microsoft
              in 2014 at an astronomical price of $2.5B USD. That transaction
              made history as one of the most expensive video game acquisitions
              ever
            </p>
            <p>... And in the top 5 acquisitions by Microsoft.</p>
            <VictoryPie
              width={300}
              height={300}
              radius={100}
              padding={20}
              data={[[0, 1], [1, 1], [2, 3], [3, 1]]}
              x={0}
              y={1}
              style={{
                labels: { fill: "white", fontSize: 20, fontWeight: "bold" }
              }}
            />
          </div>
        </div>
        <div className="brick" id="brick-2">
          <h2>Most active playerbase by country</h2>
          <div className="data-wrapper">
            <p>
              Mojang, and the entirety of Minecraft IP was acquired by Microsoft
              in 2014 at an astronomical price of $2.5B USD. That transaction
              made history as one of the most expensive video game acquisitions
              ever
            </p>
            <p>... And in the top 5 acquisitions by Microsoft.</p>
            <VictoryPie
              width={300}
              height={300}
              radius={100}
              padding={20}
              data={[[0, 1], [1, 1], [2, 3], [3, 1]]}
              x={0}
              y={1}
              style={{
                labels: { fill: "white", fontSize: 20, fontWeight: "bold" }
              }}
            />
          </div>
        </div>
        <div className="brick" id="brick-3">
          <h2>Top games in the Survival genre</h2>
          <div className="data-wrapper">
            <p>
              Mojang, and the entirety of Minecraft IP was acquired by Microsoft
              in 2014 at an astronomical price of $2.5B USD. That transaction
              made history as one of the most expensive video game acquisitions
              ever
            </p>
            <p>... And in the top 5 acquisitions by Microsoft.</p>
            <VictoryChart
              width={300}
              height={300}
              padding={20}
              style={{ labels: { fill: "white", fontSize: 20, fontWeight: "bold" }, axisLabel: { fill: "white", padding: 30 } }}
            >
              <VictoryBar
                data={[[0, 1], [1, 1], [2, 3], [3, 1]]}
                x={0}
                y={1}
                style={{ data: { fill: "#c43a31", width: 30 } }}
              />
            </VictoryChart>
          </div>
        </div>
      </div>
    );
  }
}

export default Data;
