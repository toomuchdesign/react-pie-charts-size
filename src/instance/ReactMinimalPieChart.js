import React from "react";
import PieChart from "react-minimal-pie-chart";


export default function ReactMinimalPieChart() {
  return React.createElement(PieChart, {
    data: [
      { title: "Cats", value: 35, color: "#E38627" },
      { title: "Dogs", value: 40, color: "#C13C37" },
      { title: "Birds", value: 55, color: "#6A2135" },
    ],
  });
}
