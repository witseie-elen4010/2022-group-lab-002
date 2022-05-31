'use strict'

const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: [true, "Include username"]
    },
    playerTries:{
        type: Number,
        required: [true, "Include Player tries"]
    },
    playerGameStatus:{
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

module.exports = mongoose.model('gameProgress',userSchema)