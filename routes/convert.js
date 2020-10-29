const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const input = req.query.input;
  console.log(input);
  res.send(input);
});

module.exports = router;
