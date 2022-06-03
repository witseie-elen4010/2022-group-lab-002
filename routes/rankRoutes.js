'use strict'
const path = require('path')
const express = require('express')
const router = express.Router()
const gameRanks = require('../modules/playerRanks')
/*
router.get('/ranks', function (req, res) {
    res.render('ranks')
  })

  router.get('/api/ranks', function (req, res) {
    let name = 'Mandla'
    res.render('../views/ranks', {
      userName: name
    })
  })
*/
router.get('/api/ranks', async (req, res) => {
  try{
    const playerRankings = await gameRanks.find()
    .sort({"userScores.score": "desc", "userScores.time": "asc"})
    .limit(5)
    .lean()
    res.render('../views/ranks', { playerRankings })
    //res.json(playerRankings)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
  
})

router.post('/', async (req, res) => {

    const getRankings = new gameRanks ({
        userID: req.body.userID,
        userScores: req.body.userScores
      })
  try{
    const playerData = await getRankings.save()
    res.status(201).json(playerData)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
})

router.get('/api/username', async (req, res) => {
  const getUser = await gameRanks.find()
  res.json(getUser) // Respond with JSON
})


router.patch('/:id', async (req, res) => {
  res.json(gameRanks.get(req.params.id))

})

module.exports = router
