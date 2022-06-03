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

/*
// RESTful api



router.post('/api/create', async function (req, res) {
  const createScore = await gameScores.create({
    text: req.body.text
  })
  console.log('Adding a new score to the database:', createScore)
  res.json(createScore) // Respond with JSON
})*/
/*
router.post('/api/delete', async function (req, res) {
  console.log('Deleting the following score from database:', req.body.deleteIndex)
  classList.delete(req.body.deleteIndex)
  res.redirect(req.baseUrl)
})

router.post('/api/edit', async function (req, res) {
  console.log('Editing a new score in the database:', req.body.newScoreID)
  classList.edit(req.body.newScore, req.body.newScoreID)
  res.redirect(req.baseUrl)
})*/

module.exports = router
