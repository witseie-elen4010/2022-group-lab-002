'use strict'

const { Timestamp } = require('mongodb')
const mongoose = require('mongoose')

const wordScchema = mongoose.Schema({
    
    // username:{
    //     type: String
    // },
    attempts:{
        type: Number
    },
    status:{
        type: Boolean
    },
    blocks:{
        type: Array,
        item: {type: String}
    }
}) 

module.exports = mongoose.model('dictionaryData',wordScchema)