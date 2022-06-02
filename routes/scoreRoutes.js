'use strict'
const path = require('path')
const express = require('express')
const router = express.Router()
const gameScore = require('../modules/scoreData')


router.get('/score', function (req, res) {
    res.sendFile(path.join(__dirname, '../views/score.html'))
})
/*
router.get('/score', function (req, res) {
  res.render('score');
});
*/
router.get('/api/scores/:id', getPlayer, (req, res) => {
  //const player = { res.player_ }
  //res.render('../views/score', { player_ })
  res.json(res.player_)
})

router.get('/api/scores', async (req, res) => {
  try {
    const playerScore = await gameScore.find()
    //res.render('../views/score', { playerScore })
    console.log(playerScore)
    res.json(playerScore)
    //res.redirect(req.baseUrl + '/score')
  } catch (err) {
    res.status(500).json({ message: err.message })
    return
  }
})

router.post('/api/create', async (req, res) => {
  const playerScore_ = new gameScore({
    userID: req.body.userID,
    score: req.body.score,
    attempts: req.body.attempts
  })
  try {
    const newScore = await playerScore_.save()
    res.status(201).json(newScore)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.patch('/api/scores/:id', getPlayer, async (req, res) => {
  if (req.body.score != null) {
    res.player_.score = req.body.score
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
