'use strict'
const express = require('express')
const app =express()

const mainRouter=require('./routes/mainRouter.js')
const accountRouter=require('./routes/accountRoutes.js')
// loading boadyParser
const bodyParser = require('body-parser')

//use bodyParser for JSON and URL encoded form bodies
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extened: true }))

//mount the routes 

app.use('/', mainRouter)
app.use('/account',accountRouter)
const port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)