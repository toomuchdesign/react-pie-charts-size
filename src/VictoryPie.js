import React from "react";
import { VictoryPie } from "victory-pie";

export default function Test() {
  return React.createElement(VictoryPie, {
    data: [
      { x: "Cats", y: 35 },
      { x: "Dogs", y: 40 },
      { x: "Birds", y: 55 }
    ]
  });
}
