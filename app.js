const express = require("express");
const app = express();

//created router
const usersRouter = require("./routers/users");

//using router
app.use("/users", usersRouter);

module.exports = app;
