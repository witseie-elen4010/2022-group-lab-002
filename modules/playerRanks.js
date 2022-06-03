'use strict'
const mongoose = require('mongoose')

const rankingsShema = mongoose.Schema({
  userID: {
    type: String,
    required: [true, 'The username of the player'],
    trim: true
  },
  userScores: {
    score: { type: Number, required: true},
    time: { type: Number, required: true}
  } 
})

module.exports = mongoose.model('playerRanks', rankingsShema)