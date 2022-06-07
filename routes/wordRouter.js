"use strict";
const path = require("path");
const express = require("express");
const wordRouter = express.Router();
const player = require("../modules/wordData");


wordRouter.get('/', function (req, res) {
    res.render('newWord')
})

//routes for POST requests
wordRouter.get("/api/wordRegister", async function (req, res) {
    try{
        const newWord = await player.find()
        res.status(201).json(newWord)
    }catch(err){
        res.status(400).json({message: err.message})
    }
});

wordRouter.post("/api/wordRegister", async function (req, res) {
    const playerWord = new player({
        username: req.body.username,
        word: req.body.word
    })
    try{
        const newWord = await playerWord.save()
        res.status(201).json(newWord)
    }catch(err){
        res.status(400).json({message: err.message})
    }
});



module.exports =wordRouter;
