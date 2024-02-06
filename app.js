const express = require("express");
const userController = require("./controller/userController");
const cors = require("cors");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use("/users", userController);
module.exports = app;
