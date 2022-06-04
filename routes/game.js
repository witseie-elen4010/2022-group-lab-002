'use strict'
const gameDictionary= require('../modules/dictionary')
const path = require('path')
const express = require('express')
const gameRouter = express.Router()

gameRouter.get('/guest', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/guest.html'))
  gameDictionary.generateWord()
})

gameRouter.post('/guest/api', (req,res)=>{

  const guesseWord=req.body.getNewWord
  const currentAttempt=req.body.currentAttempt
  
  const generatedWord=gameDictionary.getTargetWord()
  const colours=gameDictionary.checkWord(generatedWord,guesseWord)
  const gameState=gameDictionary.winCondition(currentAttempt)
  const isPresent = gameDictionary.isValidWord(guesseWord)
  console.log('guessed: ',guesseWord)
  console.log('WordOfDay: ',generatedWord)
  console.log('Attempts: ',currentAttempt)
  console.log(gameState)
  console.log(colours)
  console.log('Server isPresent',isPresent)
  res.json({
  colours,
  gameState,
  isPresent
  })
})

module.exports = gameRouter
