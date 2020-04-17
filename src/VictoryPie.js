import React from "react";
import { VictoryPie as PieChart } from "victory-pie";

export default function VictoryPie() {
  return React.createElement(PieChart, {
    data: [
      { x: "Cats", y: 35 },
      { x: "Dogs", y: 40 },
      { x: "Birds", y: 55 },
    ],
    colorScale: ["#E38627", "#C13C37", "#6A2135"],
  });
}
