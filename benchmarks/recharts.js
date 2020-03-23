import React from "react";
import { ResponsiveContainer, Pie, PieChart, Cell } from "recharts";

const data = [
  { name: "Cats", value: 35, color: "#E38627" },
  { name: "Dogs", value: 40, color: "#C13C37" },
  { name: "Birds", value: 55, color: "#6A2135" }
];

function Test() {
  return React.createElement(
    ResponsiveContainer,
    { aspect: 1 },
    React.createElement(
      PieChart,
      undefined,
      React.createElement(
        Pie,
        {
          data,
          dataKey: "value"
        },
        data.map((entry, index) =>
          React.createElement(Cell, {
            key: `cell-${index}`,
            fill: entry.color
          })
        )
      )
    )
  );
}
