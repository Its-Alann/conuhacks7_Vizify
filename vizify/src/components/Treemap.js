import React, { Component } from "react";
import Chart from "react-apexcharts";

class Treemap extends Component {
  constructor(props) {
    super(props);

    const artistNameData = this.props.data[0]
    const fileData = this.props.data[1]
    // console.log(artistNameData);
    // console.log(fileData);
    const mapper = artistNameData.map((artist, index) => {
        return {
            x: artist + "",
            y: fileData[index]
        }
    });

    this.state = {
      series: [
        {
          data: mapper
        }
      ],
      options: {
        legend: {
          show: false
        },
        chart: {
          height: 500,
          type: "treemap"
        },
        title: {
          text: "VIZIFY - Top Artists",
          align: "center"
        },
        colors: [
          "#3B93A5",
          "#F7B844",
          "#ADD8C7",
          "#EC3C65",
          "#CDD7B6",
          "#C1F666",
          "#D43F97",
          "#1E5D8C",
          "#421243",
          "#7F94B0",
          "#EF6537",
          "#C0ADDB"
        ],
        plotOptions: {
          treemap: {
            distributed: true,
            enableShades: false
          }
        }
      },
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="treemap"
              width="2600px"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Treemap;
