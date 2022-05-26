"use strict";
const path = require("path");
const express = require("express");
const router = express.Router();
const userData = require("../modules/accountData.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const players = require("../modules/players");

router.get("/register", function (req, res) {
  res.render("register");
});

router.get("/login", function (req, res) {
  res.render("login");
});

//RESTful api

router.get("/api/info", function (req, res) {
  res.json(userData.getData()); //respond with JSON
});

//routes for POST requests
router.post("/api/register", async function (req, res) {
  /***************************** */

  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  //check if account already exists
  const playerExits = await players.findOne({ email });
  const usernameExist= await players.findOne({username});
  if (playerExits || username) {
    req.flash("error", "Account already exist, Login to your account");
    res.status(400).redirect(req.baseUrl + "/login");
  }
else{
  const salt = await bcrypt.genSalt(saltRounds);
  const hashedPassword = await bcrypt.hash(password, salt);

  const player = await players.create({
    username,
    email,
    password: hashedPassword,
  });
  if (player) {
    console.log({
      _id: players.id,
      username: players.username,
      email: players.email,
    });

    req.flash("success", "Registration successful, Login to your account");
    res.redirect(req.baseUrl + "/login");
  }
   else {
    // res.status(400);
    req.flash("error", "Account already exist, Login to your account");
    res.redirect(req.baseUrl + "/login");
  }
}
});

//route for login POST request
router.post("/api/login", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  //check if username exists
  const player = await players.findOne({ username });

  if (player) {
    const pass = await bcrypt.compare(password, player.password);

    if (pass) {
      req.flash("success", "Login successful");
      res.sendFile(path.join(__dirname, "../views/gameBoard.html")); //this will be directed to the game page
    } else {
      req.flash("error", "password does not match");
      res.redirect(req.baseUrl + "/login");
    }
  } else {
    req.flash("error", "account does not exists, please register");
    //res.status(400);
    res.redirect(req.baseUrl + "/register");
  }
});

module.exports = router;
