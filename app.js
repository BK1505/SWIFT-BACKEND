const express = require("express");
const bodyParser = require("body-parser");
const app = express();

//created router
const usersRouter = require("./routers/users");

//using middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//using router
app.use("/users", usersRouter);

module.exports = app;
