'use strict'

const path = require('path')
const express = require('express')
const progress = express.Router()
const wordSchema = require("../modules/wordData");
const results = require("../public/scripts/gameBoard")

progress.get('/', async (req,res)=>{
    try{
       // const users = await gameProgress.find()
       // res.json(users)
    }
    catch (err){
        res.status(500).json({message: err.message})
    }
})

progress.post('/',async (req,res)=>{
    const userProgress = new gameProgress({
        username: req.body.username,
        playerTries: results.currentAttempt,
        playerGameStatus: results.gameOver,
        playerBlcoks: results.colours
    })

    try{
        const userData = await userProgress.save()
        res.status(201).json(userData)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

progress.get('/username', async (req,res)=>{
    const userInfo = await userProgress.find()
    res.json(userInfo)
})