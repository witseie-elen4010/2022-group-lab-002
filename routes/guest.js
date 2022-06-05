'use strict'
const gameDictionary= require('../modules/dictionary')
const path = require('path')
const express = require('express')
const gameRouter = express.Router()

gameRouter.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../views/guest.html'))
  gameDictionary.generateWord()
})

gameRouter.post('/api', (req,res)=>{

  const guesseWord=req.body.getNewWord
  const currentAttempt=req.body.currentAttempt
  
  const generatedWord=gameDictionary.getTargetWord()
  const colours=gameDictionary.checkWord(generatedWord,guesseWord)
  const winState =gameDictionary.winCondition()
  const loseState = gameDictionary.loseCodintion(currentAttempt)
  const isPresent = gameDictionary.isValidWord(guesseWord)
  const nextAttempt = gameDictionary.getNextAttempt(currentAttempt)
console.log('word of the day: ',generatedWord)
  res.json({
  colours,
  winState,
  loseState,
  isPresent,
  nextAttempt,
  generatedWord
  })
})

module.exports = gameRouter
