"use strict";
const path = require("path");
const express = require("express");
const shareRouter = express.Router();
const player = require("../modules/shareLink");


shareRouter.get('/', function (req, res) {
    res.render('share')
})

//routes for POST requests
shareRouter.get("/api/shareScore", async function (req, res) {
    try{
        const newScore = await player.find()
        res.status(201).json(newScore)
    }catch(err){
        res.status(400).json({message: err.message})
    }
});

shareRouter.post("/api/shareScore", async function (req, res) {
    const playerScore = new player({
        username: req.body.username,
        score: req.body.score
    })
    try{
        const newScore = await playerScore.save()
        res.status(201).json(newScore)
    }catch(err){
        res.status(400).json({message: err.message})
    }
});



module.exports = shareRouter;