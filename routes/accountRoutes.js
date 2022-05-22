"use strict";
const path = require("path");
const express = require("express");
const router = express.Router();
const userData = require("../modules/accountData");
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
  console.log(
    `added player info: username ${req.body.username} password ${req.body.password} email ${req.body.email}`
  );
  const exist = userData.alreadyExists(req.body.email, req.body.username);
  console.log(`Register ${exist}`);

  if (!exist) {
    const player = {
      username: req.body.username,
      password: req.body.password,
      email: req.body.email,
    };
    userData.add(player);
    console.log("users", userData.getData());
    req.flash('success', 'Registration successful, Login to your account');
    res.redirect(req.baseUrl + "/login");
    
  } else {
    // res.send("<div align ='center'><h2>Email already used</h2></div>")
    req.flash('error', 'Account already exist, Login to your account'); 
    res.redirect(req.baseUrl + "/login");
  }
});

router.post("/api/login", function (req, res) {
  console.log(
    `login credentials :  usernamer ${req.body.password} email ${req.body.username}`
  );

  const exist = userData.verify(req.body.username, req.body.password);
  console.log(`Login ${exist}`);

  if (exist) {
    req.flash('success', 'Login successful');
    res.redirect(req.baseUrl+"/register")
  } else {
    req.flash('error', 'Account does not exist, register instead'); 
    res.redirect(req.baseUrl + "/register");
  }
});

module.exports = router;
