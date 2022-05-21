'use strict'
const express = require('express')
const app = express()

const scoreRouter = require('./routes/scoreRoutes')

const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/gameScores', scoreRouter)
app.use('/cdn', express.static('public'))

const port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)