import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import numeral from "numeral";

const options = {
  maintainAspectRatio: false,
  tooltips: {
    mode: "index",
    intersect: false,
    callback: function (tooltipItem, value, data) {
      return numeral(value).format("+0,0");
    },
  },
  scales: {
    xAxes: [
      {
        type: "time",
        time: {
          format: "MM/DD/YY",
          tooltipFormat: "ll",
        },
      },
    ],
    yAxes: [
      {
        gridLines: {
          display: false,
        },
      },
    ],
  },
};

function LineGraph() {
  const [data, setData] = useState({});

  const buildChartData = (data) => {
    let chartData = [];
    for (let date in data.cases) {
      let newDataPoint = {
        x: date,
        y: data.cases[date],
      };
      chartData.push(newDataPoint);
    }
    return chartData;
  };

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=90")
      .then((response) => response.json())
      .then((data) => {
        const chartData = buildChartData(data);
        setData(chartData);
      });
  }, []);

  return (
    <div>
      <h1> Hello Graph</h1>
      {data?.length > 0 && (
        <Line
          options={options}
          data={{
            datasets: [
              {
                label: "Total Cases",
                backgroundColor: "rgba(204, 16, 52, 0.5)",
                borderColor: "#CC1034",
                data: data,
              },
            ],
          }}
        />
      )}
    </div>
  );
}

export default LineGraph;
