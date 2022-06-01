'use strict'

const mongoose = require('mongoose')

const scoreSchema = mongoose.Schema({
    __id:{
        type: String,
        required: [true, "Include username"]
    },
    score:{
        type: Number,
        required: [true, "Include Player player score"]
    },
    playerTries:{
        tryOne: {
            type: Number,
            required: true
        },
        tryTwo: {
            type: Number,
            required: true
        },
        tryThree: {
            type: Number,
            required: true
        },
        tryFour: {
            type: Number,
            required: true
        },
        tryFive: {
            type: Number,
            required: true
        },
        trySix: {
            type: Number,
            required: true
        }
    }
}) 

module.exports = mongoose.model('gameScores', scoreSchema)