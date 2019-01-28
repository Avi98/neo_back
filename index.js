const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const apiRoutes = require("./src/api-routes/routes");

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());
mongoose.connect(
  "mongodb://password1:password1@ds253804.mlab.com:53804/neo_todo"
);
var db = mongoose.connection;
var port = process.env.PORT || 8080;

const corsHeader = (req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

app.get("/", corsHeader, (req, res) => {
  res.send("Hello World with Express");
});
app.use("/api", corsHeader, apiRoutes);
app.listen(port, function() {
  console.log("Running RestHub on port " + port);
});
