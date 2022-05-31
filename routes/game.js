'use strict'

const path = require('path')
const express = require('express')
const gameRouter = express.Router()

gameRouter.get('/guest', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/guest.html'))
})

module.exports = gameRouter
