'use strict'
const path =require('path')
const express = require('express')
const router=express.Router()
const userData= require('../modules/accountData')

router.get('/', function(req,res){
    res.sendFile(path.join(__dirname ,'../views/home.html'))
})

router.get('/register', function(req, res){
    res.sendFile(path.join(__dirname,'../views/register.html'))
})

router.get('/login', function(req, res){
    res.sendFile(path.join(__dirname, '../views/login.html'))
})

//RESTful api

router.get('/api/info', function(req, res){
    res.json(userData.getData()) //respond with JSON
})

//routes for POST requests 
router.post('/api/register', function(req,res){
    console.log(`added player info: username ${req.body.username} password ${req.body.password} email ${req.body.email}`)
    const exist=userData.alreadyExists(req.body.email)
     console.log(`Register ${exist}`)

if(!exist)
{
    const player= {
        username: req.body.username,
        password: req.body.password,
        email: req.body.email
        }
        userData.add(player)
        console.log('users',userData.getData())
        res.send("<div align ='center'><h2>Registration successful</h2></div> <br><br><div align ='center'><a href='/account/login'>Login</a></div>")
    // res.redirect(req.baseUrl)

}
else{
    res.send("<div align ='center'><h2>Email already used</h2></div>")
     res.redirect(req.baseUrl +'/login')
}
//     res.redirect(req.baseUrl)


})

router.post('/api/login', function(req, res){

   console.log(`login credentials : username ${req.body.username} password ${req.body.password} email ${req.body.email}`)
   
   const player= {
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
    }

   const exist=userData.verify(player)
   console.log(`Login ${exist}`)

   if(exist){
    res.send(`<div align ='center'><h2>login successful</h2></div><br><br><br><div align ='center'><h3>Hello ${player.username}</h3></div><br><br><div align='center'><a href='account/'>logout</a></div>`);
  
   }
   else{
    res.send("<div align ='center'><h2>Invalid email or password</h2></div><br><br><div align ='center'><a href='/account/login'>login again</a></div>  <br><br><div align ='center'><a href='/account/register'>Register</a></div>");

   }

})

module.exports=  router 