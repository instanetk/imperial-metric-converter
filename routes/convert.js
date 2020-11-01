const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  const input = req.query.input;

  if (!input)
    res.render("../views/pug/index", {
      msg: "Error -",
      show: { error: "invalid number and unit" },
    });

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
  let value;
  let raw = array.slice(0, index[0]).join("");
  let unit = array.slice(index[0]).join("");

  let fraction = /\//;

  if (raw.match(fraction) === null) {
    value = raw;
  } else {
    console.log("fraction");
    let fract = raw.split("/");
    console.log(fract);
    value = Number(fract[0]) / Number(fract[1]).toPrecision(5);
  }

  const measures = {
    // [relative unit, name, converts to]
    km: [0.62137, "kilometers", "mi", "miles"],
    mi: [1.60934, "miles", "km", "kilometers"],
    kg: [2.20462, "kilograms", "lbs", "pounds"],
    lbs: [0.45359, "pounds", "kg", "kilograms"],
    gal: [3.78541, "gallons", "l", "liters"],
    l: [0.264172, "liters", "gal", "gallons"],
  };

  const convert = Number(measures[unit][0] * value).toPrecision(6);

  const msg =
    value +
    " " +
    measures[unit][1] +
    " " +
    "converts to" +
    " " +
    convert +
    " " +
    measures[unit][3];

  const output = {
    initNum: Number(value),
    initUnit: unit,
    returnNum: Number(convert),
    returnUnit: measures[unit][2],
    string: msg,
  };
  console.log(output);
  res.render("../views/pug/index", {
    msg: output.string,
    show: output,
  });
});

module.exports = router;
