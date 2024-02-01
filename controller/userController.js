const express = require("express");
const controller = express.Router();
const userData = require("../data.json");

controller.get("/", (req, res) => {
  const { limit } = req.query;
  const { students } = userData;
  if (!limit || isNaN(limit)) {
    res.status(200).send(students);
  }
  const studentsWithLimits = students.slice(0, Number(limit));
  res.status(200).send(studentsWithLimits);
});

controller.get("/:id", (req, res) => {
  //   let id = req.params.id;
  const { students } = userData;
  let result = students.find(({ id }) => id === req.params.id);
  res.status(200).send(result);
});

controller.get("/capitalStudentName/:id", (req, res) => {
  const { students } = userData;
  let result = students.find(({ id }) => id === req.params.id);
  let capitalName = (result.firstName + result.lastName).toUpperCase();
  res.status(200).send(capitalName);
});
module.exports = controller;
