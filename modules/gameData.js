'use strict'

const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    playerTries:{
        type: Number,
        required: [true, "Include Player tries"]
    },
    playerGameWin:{
        type: Boolean,
        required: [true, "Include Player game status"]
    },
    playerBlocks:{
        type: Array,
        required: [true, "Must include player's blocks"]
    }
},
    {timestamp: true}
) 

module.exports = mongoose.model('gameDataSchema',userSchema)