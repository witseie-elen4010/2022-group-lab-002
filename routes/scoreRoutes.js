'use strict'
const path = require('path')
const express = require('express')
const router = express.Router()
const classList = require('../modules/scoreData')


router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/gameScores/score.html'))
})


module.exports = router