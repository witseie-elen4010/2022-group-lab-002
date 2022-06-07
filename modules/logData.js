'use strict'

const mongoose = require('mongoose')

const logSchema = mongoose.Schema({
    userID: { type: String, required: true },
    userStart: { type: Boolean, required: true },
    gameOver: { type: Boolean, required: true },
    timePlayed: {type: Number }
}) 

module.exports = mongoose.model('logs', logSchema)