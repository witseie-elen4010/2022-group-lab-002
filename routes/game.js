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
  const winState =gameDictionary.winCondition()
  const loseState = gameDictionary.loseCodintion(currentAttempt)
  const isPresent = gameDictionary.isValidWord(guesseWord)
  const nextAttempt = gameDictionary.getNextAttempt(currentAttempt)
  console.log('guessed: ',guesseWord)
  console.log('WordOfDay: ',generatedWord)
  console.log('From client Attempts: ',currentAttempt)
  console.log('Game won',winState)
  console.log('Game lsot',loseState)
  console.log(colours)
  console.log('Server isPresent',isPresent)
  console.log('To client attempts:',nextAttempt)
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
