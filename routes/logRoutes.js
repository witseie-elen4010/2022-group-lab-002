'use strict'

const path = require('path')
const express = require('express')
const router = express.Router()
const gameLogs = require('../modules/logData')

router.get('/ranks', function (req, res) {
  res.render('ranks');
})

router.get('/api/logs/:id', getPlayer, (req, res) => {
  //const player = { res.player_ }
  //res.render('../views/score', { player_ })
  res.json(res.player_)
})

router.get('/api/logs', async (req, res) => {
  try {
    const playerLogs = await gameScore.find()
    //res.render('../views/score', { playerScore })
    console.log(playerLogs)
    res.json(playerLogs)
    //res.redirect(req.baseUrl + '/score')
  } catch (err) {
    res.status(500).json({ message: err.message })
    return
  }
})

router.post('/api/create', async (req, res) => {
  const playerLogs = new gameScore({
    userID: req.body.userID,
    time: req.body.time
  })
  try {
    const createLogs = await playerLogs.save()
    res.status(201).json(createLogs)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.patch('/api/logs/:id', getPlayer, async (req, res) => {
  if (req.body.time.endAt != null) {
    res.player_.time.endAt = req.body.time.endAt
  }
  try {
    const updatedData = await res.player_.save()
    res.json(updatedData)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

async function getPlayer(req, res, next) {
  let player_
  try {
    player_ = await gameScore.findById(req.params.id)
    if (player_ == null) {
      return res.status(404).json({ message: 'Cannot find username' })
    }
  } catch (err) {
    return res.status(500).json({ message: err.message })
  }
  res.player_ = player_
  next()
}

module.exports = router