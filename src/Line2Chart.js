import React, { Component } from "react";
import Chart from "react-apexcharts";

class Line2Chart extends Component {
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
          foreColor: 'grey'
        },
        stroke: {
          width: 2,
        },
        grid:{
                show:false,
        },
        xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
            axisTicks: {
                show: false,
            },
            axisBorder: {
                show: false
            },
            labels: {
                show: false
              }
        },
        yaxis:{
            axisBorder:{
                show:false
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
                  color: "#FF2323",
                  opacity: 1
                },
                {
                  offset: 20,
                  color: "#B6B93C",
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
            },
          },
        
    },
      series: [
        {
          name: "series-1",
          data: [1,40, 2, 50,60, 10, 91,94],
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
              width="250"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Line2Chart;