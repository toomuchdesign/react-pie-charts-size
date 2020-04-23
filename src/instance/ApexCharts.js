import React from "react";
import Chart from "react-apexcharts";

export default function AphexChart() {
  return React.createElement(Chart, {
    type: "pie",
    series: [35, 40, 55],
    options: {
      labels: ["Cats", "Dogs", "Birds"],
      legend: {
        show: false,
      },
      colors: ["#E38627", "#C13C37", "#6A2135"],
    },
  });
}
