const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const convert = require("./routes/convert");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api/convert", convert);

const port = process.env.PORT || 3000;

const server = app.listen(port, console.log(`Listening on port ${port}`));

module.exports = server;
