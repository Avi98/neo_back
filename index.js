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
app.get("/", (req, res) => res.send("Hello World with Express"));
app.use("/api", apiRoutes);
app.listen(port, function() {
  console.log("Running RestHub on port " + port);
});
