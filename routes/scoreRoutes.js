'use strict'
const path = require('path')
const express = require('express')
const router = express.Router()
const classList = require('../modules/scoreData')


router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/gameScores/score.html'))
})

// RESTful api
router.get('/api/list', function (req, res) {
  res.json(classList.getData()) // Respond with JSON
})
router.get('/api/get/:id', function (req, res) {
  res.json(classList.get(req.params.id)) // Notice the wildcard in the URL?
  // Try browsing to /api/get/0 once you've added some entries
})
// routes for POST requests
router.post('/api/create', function (req, res) {
  console.log('Adding the following student:', req.body.student)
  classList.add(req.body.student)
  res.redirect(req.baseUrl)
})
module.exports = router