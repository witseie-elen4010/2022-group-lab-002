"use strict";
const path = require("path");
const express = require("express");
const router = express.Router();
const userData = require("../modules/accountData");
const bcrypt = require("bcrypt");
const saltRounds = 10;

router.get("/", function (req, res) {
  res.render("home");
});

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
router.post("/api/register", function (req, res) {

  const player = {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  };
 
  //hash player password
  bcrypt.genSalt(saltRounds, (err, salt) => {
    bcrypt.hash(player.password, salt, (err, hash) => {
      if(err) throw err;
      player.password = hash;
      console.log(
        `added player info: username ${req.body.username} password ${player.password} email ${req.body.email}`
      );
       const exist = userData.alreadyExists(player.email,player.username);
      console.log(`Register ${exist}`);
    
      if (!exist) {
        userData.add(player);
        console.log("users", userData.getData());
        req.flash("success", "Registration successful, Login to your account");
        res.redirect(req.baseUrl + "/login");
      } else {
        req.flash("error", "Account already exist, Login to your account");
        res.redirect(req.baseUrl + "/login");
      }
    });
  });
 
});

router.post("/api/login", function (req, res) {
 
let playerPass = req.body.password;
const password=userData.getPassword(req.body.username)

console.log(password)

bcrypt.compare(playerPass,password, (err,isMatch)=>
{
  if(err) throw err;
  
  if(isMatch)
  {
    req.flash("success", "Login successful");
        res.redirect(req.baseUrl + "/register");
  }
  else {
    req.flash("error", "Account does not exist, register instead");
    res.redirect(req.baseUrl + "/register");
  }
})  
});

module.exports = router;
