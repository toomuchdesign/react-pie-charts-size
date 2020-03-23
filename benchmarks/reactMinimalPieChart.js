import React from "react";
import PieChart from "react-minimal-pie-chart";

export default function Test() {
  return React.createElement(PieChart, {
    data: [
      { name: "Cats", value: 35, color: "#E38627" },
      { name: "Dogs", value: 40, color: "#C13C37" },
      { name: "Birds", value: 55, color: "#6A2135" }
    ],
    label: true
  });
}
