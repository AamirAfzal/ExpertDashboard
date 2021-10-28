import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          toolbar:
            {show : false
        },
          id: "basic-bar",
          background: 'transparent',
          foreColor: 'transparent',
        },
        grid:{
                show:false,
        },
        stroke:{
          width:2
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false
            }
        },
        fill: {
            type: 'gradient',
            gradient: {
              shade: 'dark',
            //   gradientFromColors:['#745BDF'],
            colorStops: [
                {
                  offset: 0,
                  color: "#E323FF",
                  opacity: 1
                },
                {
                  offset: 20,
                  color: "#7517F8",
                  opacity: 1
                },
                {
                  offset: 60,
                  color: "#3C354A",
                  opacity: 1
                },
                {
                  offset: 100,
                  color: "#FFFFFF",
                  opacity: 1
                }
              ],
              shadeIntensity: 1,
              type: 'horizontal',
              stops: [0, 100, 100, 100]
            },
          },
        
    },
      series: [
        {
          name: "series-1",
          data: [1, 40, 15, 50, 41, 60, 10, 91],
        }
      ],
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
              type="line"
              height="150"
              width="150"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default LineChart;