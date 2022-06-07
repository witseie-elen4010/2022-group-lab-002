'use strict'

const mongoose = require('mongoose')

const rankSchema = mongoose.Schema({
    userID: { type: String, required: true },
    gameOver: { type: Boolean, required: true},
    userScores: {
        score: { type: Number, required: true },
        timePlayed: { type: Number, required: true }
    }
}) 

module.exports = mongoose.model('playerranks', rankSchema)