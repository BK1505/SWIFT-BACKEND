const express = require("express");
const bodyParser = require("body-parser");
const mongooose = require("mongoose");
const app = express();

//created router
const usersRouter = require("./routers/users");

//using middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB connection
mongooose.connect("mongodb://localhost/swifts", () => {
  console.log("MongoDB Connected");
});

//using router
app.use("/users", usersRouter);

module.exports = app;
