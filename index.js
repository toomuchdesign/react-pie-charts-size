const resolve = require("path").resolve;
const mapValues = require("lodash.mapvalues");
const sizeLimit = require("size-limit");
const presetBigLib = require("@size-limit/preset-big-lib");
const NUMBER_OF_RUNS = 10;
const IGNORE = ["react", "react-dom", "prop-types"];
const {
  sumObjectValues,
  subtractObjectValues,
  formatResult
} = require("./utils");
const getBenchmark = filename => resolve(__dirname, "benchmarks", filename);
const benchmarks = [
  {
    name: "Boilerplate",
    filePath: getBenchmark("empty.js")
  },
  {
    name: "React minimal pie chart",
    filePath: getBenchmark("reactMinimalPieChart.js")
  },
  {
    name: "Rechart",
    filePath: getBenchmark("recharts.js")
  },
  {
    name: "Victory Pie",
    filePath: getBenchmark("victoryPie.js")
  },
  {
    name: "Apex Charts",
    filePath: getBenchmark("apexCharts.js")
  }
];

async function runBenchmark({ name, filePath }) {
  const results = [];
  console.log(`\nRun "${name}" benchmark:`);
  while (results.length < NUMBER_OF_RUNS) {
    try {
      console.log(`${results.length + 1} times/${NUMBER_OF_RUNS}`);
      const result = await sizeLimit([presetBigLib], {
        checks: [{ path: filePath, ignore: IGNORE }]
      });
      results.push(result[0]);
    } catch (e) {}
  }

  const sum = sumObjectValues(...results);
  const average = mapValues(sum, value => value / NUMBER_OF_RUNS);
  return average;
}

async function runAllBenchmarks() {
  const results = [];
  for (const benchmark of benchmarks) {
    const result = await runBenchmark(benchmark);
    results.push({
      library: benchmark.name,
      result
    });
  }

  const boilerplate = results[0];
  const others = [...results].slice(1);
  const netResults = others.map(entry => ({
    ...entry,
    result: subtractObjectValues(entry.result, boilerplate.result)
  }));
  const formattedResults = [boilerplate, ...netResults].map(entry => ({
    ...entry,
    result: formatResult(entry.result)
  }));

  console.log(formattedResults);
}

runAllBenchmarks();
