const express = require("express");
const userController = require("./controller/userController");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/users", userController);
module.exports = app;
