'use strict'

const mongoose = require('mongoose')

const scoreSchema = mongoose.Schema({
    userID:{
        type: String,
        required: [true, "Include username"]
    },
    time:{
        startAt: { type: new Date() }, 
        endAt: { type: Date, required: true}
    }
}) 

module.exports = mongoose.model('gameScores', scoreSchema)