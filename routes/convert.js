const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const input = req.query.input;
  const array = input.split("");
  let index = [];

  // Find beginning of unit in input string
  for (char of array) {
    let test = /[a-z]/;
    if (char.match(test)) {
      index.push(array.indexOf(char));
    }
  }

  // Define unit and value individually
  let unit = array.slice(index[0]).join("");
  let value = array.slice(0, index[0]).join("");

  const measures = {
    // [relative unit, name, converts to]
    km: [0.62137, "kilometers", "mi", "miles"],
    mi: [1.60934, "miles", "km", "kilometers"],
    kg: [2.20462, "kilograms", "lbs", "pounds"],
    lbs: [0.45359, "pounds", "kg", "kilograms"],
    gal: [3.78541, "gallons", "l", "liters"],
    l: [0.26417, "liters", "gal", "gallons"],
  };

  const msg =
    value +
    " " +
    measures[unit][1] +
    " " +
    "converts to" +
    " " +
    measures[unit][0] * value +
    " " +
    measures[unit][3];

  const output = {
    initNum: value,
    initUnit: unit,
    returnNum: measures[unit][0] * value,
    returnUnit: measures[unit][2],
    string: msg,
  };

  console.log(output);

  res.send(output);
});

module.exports = router;
