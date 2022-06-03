'use strict'
const mongoose = require('mongoose')

const scoreShema = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'The username of the player']
  },
  playerTries: {
    type: Number,
    required: [true, 'The try player won on']
  },
  playerScore: {
    type: Number,
    required: [true, 'Please include include']
  },
}, {   timestamps: true })

module.exports = mongoose.model('Scores', scoreShema)