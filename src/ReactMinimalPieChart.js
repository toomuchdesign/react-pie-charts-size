import React from "react";
import PieChart from "react-minimal-pie-chart";

export default function Test() {
  return React.createElement(PieChart, {
    data: [
      { title: "Cats", value: 35 },
      { title: "Dogs", value: 40 },
      { title: "Birds", value: 55 }
    ]
  });
}
