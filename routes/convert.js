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

  console.log(input, index, value, unit);
  res.send(input);
});

module.exports = router;
