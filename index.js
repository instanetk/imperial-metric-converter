const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const convert = require("./routes/convert");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.set("view engine", "pug");
app.use("/api/convert", convert);
app.use("/public", express.static(process.cwd() + "/public"));

app.use("/", (req, res) => {
  res.render(process.cwd() + "/views/pug/index");
});

const port = process.env.PORT || 3000;

const server = app.listen(port, console.log(`Listening on port ${port}`));

module.exports = server;
