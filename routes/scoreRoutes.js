'use strict'
const path = require('path')
const express = require('express')
const router = express.Router()
const gameScores = require('../modules/scoreData')


router.get('/share', function (req, res) {
  res.render('share')
})

router.get('/', async function (req, res) {
  try{
    const subscribers = await gameScores.find()
    res.json(subscribers)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
  
})

router.post('/', async (req, res) => {

  const playerScores = new gameScores ({
    username: req.body.username,
    playerTries: req.body.playerTries,
    playerScore: req.body.playerScore
  })
  try{
    const playerData = await playerScores.save()
    res.status(201).json(playerData)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.get('/api/username', async (req, res) => {
  const getUser = await gameScores.find()
  res.json(getScore) // Respond with JSON
})


router.patch('/:id', async (req, res) => {
  res.json(gameScores.get(req.params.id))

})


module.exports = router