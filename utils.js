const mergeWith = require("lodash.mergewith");
const mapValues = require("lodash.mapvalues");

function sumObjectValues(...objects) {
  return mergeWith({}, ...objects, (a = 0, b = 0) => {
    return a + b;
  });
}

function subtractObjectValues(...objects) {
  return mergeWith({}, ...objects, (a, b) => {
    if (a === undefined) return b;
    return a - b;
  });
}

function formatTime(seconds) {
  return Math.ceil(seconds * 1000) + " ms";
}

function formatSize(bytes) {
  return bytes / 1000 + " KB";
}

function formatResult(result) {
  return mapValues(result, (value, key) => {
    if (key === "size") {
      return formatSize(value);
    }

    if (key.toLowerCase().includes("time")) {
      return formatTime(value);
    }

    return value;
  });
}

exports.sumObjectValues = sumObjectValues;
exports.subtractObjectValues = subtractObjectValues;
exports.formatResult = formatResult;
