import React from "react";
import {Pie, PieChart} from "recharts";

export default function Test() {
  return React.createElement(
    PieChart,
    null,
    React.createElement(Pie)
  );
}
