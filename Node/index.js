const express = require("express");
const cors = require("cors");
const fs = require("fs");
const app = express();
const port = process.env.port || 3000;
const bodyParser = require("body-parser");
const path = require("path");
const { Console } = require("console");
// app.use(express.urlencoded());
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cors("*"));

app.listen(port, function (req, res) {
  console.log(`listening on port : ${port}`);
});

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/api.html"));
});

app.post("/post", function (req, res) {
  fs.readFile("endpoint.txt", function (err, file) {
    let data = file.toString();
    data = JSON.parse(data);
    data.push(req.body);
    fs.writeFile("endpoint.txt", JSON.stringify(data), function (err, file) {
      res.redirect("/");
    });
  });
});
app.get("/get", function (req, res) {
  fs.readFile("endpoint.txt", function (err, file) {
    let data = file.toString();

    res.send(data);
  });
});
