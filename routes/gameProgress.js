'use strict'

const path = require('path')
const express = require('express')
const progress = express.Router()
const userSchema = require("../modules/gameData");
const results = require("../routes/accountRoutes")

progress.get('/', async (req,res)=>{
    try{
        const usersData = await userSchema.find()
        res.json(usersData)
    }
    catch (err){
        res.status(500).json({message: err.message})
    }
})

progress.post('/',async (req,res)=>{
    const userProgress = new userSchema({
        playerTries: getData().nextAttempt,
        playerGameWin: getData().winState,
        playerBlocks: getData().colours
    })
    console.log(userProgress)

    try{
        const userData = await userProgress.save()
        res.status(201).json(userData)
    }catch(err){
        res.status(400).json({message: err.message})
    }
})

progress.get('/progress/api',async (req,res)=>{
    const gameInfo = results.primData
    console.log('data requested is:', gameInfo)
    try {
        res.json(gameInfo)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})


module.exports = progress