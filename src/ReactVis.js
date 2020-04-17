import React from "react";
import { RadialChart } from "react-vis";

export default function ReactVis() {
  return React.createElement(RadialChart, {
    data: [
      { angle: 1, label: "Cats" },
      { angle: 5, label: "Dogs" },
      { angle: 2, label: "Birds" },
    ],
    colorRange: ["#E38627", "#C13C37", "#6A2135"],
    width: 300,
    height: 300,
  });
}
