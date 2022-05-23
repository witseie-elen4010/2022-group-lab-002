"use strict";
const path = require("path");
const express = require("express");
const mainRouter = express.Router();

mainRouter.get("/", function (req, res) {
  res.render("home");
});

module.exports = mainRouter;
