import React from "react";
import { Pie, PieChart } from "recharts";

export default function Test() {
  return React.createElement(
    PieChart,
    React.createElement(Pie, {
      data: [
        { name: "Cats", value: 35 },
        { name: "Dogs", value: 40 },
        { name: "Birds", value: 55 }
      ],
      dataKey: "value"
    })
  );
}
