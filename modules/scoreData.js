'use strict'

const mongoose = require('mongoose')

const scoreSchema = mongoose.Schema({
    userID:{
        type: String,
        required: [true, "Include username"]
    },
    score:{
        type: Number,
        required: [true, "Include player score"]
    },
    attempts:{
        type: Array,
        items: { type: Number }
    },
    gameOver: { 
        type: Boolean,
        required: true 
    }
}) 

module.exports = mongoose.model('gameScores', scoreSchema)