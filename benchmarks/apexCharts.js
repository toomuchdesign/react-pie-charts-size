import React from "react";
import Chart from "react-apexcharts";

export default function Test() {
  return React.createElement(Chart, {
    type: "pie",
    series: [35, 40, 55],
    options: {
      labels: ["Cats", "Dogs", "Birds"]
    },
    legend: false
  });
}
