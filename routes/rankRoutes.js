'use strict'

const path = require('path')
const express = require('express')
const router = express.Router()
const gameRanks = require('../modules/ranksData')

router.get('/api/ranks/:id', getPlayer, (req, res) => {
  res.json(res.player_)
})

router.get('/api/ranks', async (req, res) => {
  try {
    const playerRanks = await gameRanks.find()
    .sort({ "userScores.score": "desc", "userScores.timePlayed": "asc" })
    .limit(5)
    .lean()
    console.log(playerRanks)
    res.render('../views/ranks', { playerRanks })
    //res.json(playerRanks)
  } catch (err) {
    res.status(500).json({ message: err.message })
    return
  }
})

router.post('/api/create', async (req, res) => {
  const playerRanks = new gameRanks({
    userID: req.body.userID,
    gameOver: req.body.gameOver,
    userScores: req.body.userScores
  })
  try {
    const createRanks = await playerRanks.save()
    res.status(201).json(createRanks)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.patch('/api/ranks/:id', getPlayer, async (req, res) => {

    res.player_.userStart = req.body.userStart
    if(req.body.gameOver != false) {
        res.player_.timePlayed = gameStopwatch.getTime()
        console.log('Timer is at:', gameStopwatch.getTime())
        gameStopwatch.reset()
    } else if(req.body.userStart != false) {
        gameStopwatch.start()
        console.log('Timer has started')
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
    player_ = await gameRanks.findById(req.params.id)
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