'use strict'

const path = require("path");
const express = require("express");
const settingsRouter = express.Router();

settingsRouter.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/settings.html'))
})

module.exports = settingsRouter;
