'use strict'

const path = require('path')
const express = require('express')
const shareScoreRouter = express.Router()

shareScoreRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/share.html'))
})

module.exports = shareScoreRouter
