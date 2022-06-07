"use strict";
const express = require("express");
const app = express();
const flash = require("connect-flash");
const cookiePaser = require("cookie-parser");
const expressEjsLayout = require("express-ejs-layouts");
const mainRouter = require("./routes/mainRouter.js");
const accountRouter = require("./routes/accountRoutes.js");
const scoreRouter = require('./routes/scoreRoutes')
const flashMessages = require("./modules/flashMessages");
const guestRouter = require("./routes/guest.js");
const gameProgressRouter = require("./routes/gameProgress")
const dictionaryRouter = require("./routes/dictionaryRouter")
const shareScoreRouter=require("./routes/shareScoreRouter.js")
const multiplayerRouter=require("./routes/multiplayerRouter")
const connectDb = require('./database/config/db')
const wordRouter = require('./routes/wordRouter.js') 
const http=require('http')
const server=http.createServer(app)
const {Server, Socket}=require("socket.io");
const io = new Server(server)
const logRouter = require('./routes/logRoutes')
const ranksRouter = require('./routes/rankRoutes')
// const gameDictionary= require('.//modules/dictionary')
// loading boadyParser
const bodyParser = require("body-parser");
const settingsRouter = require('./routes/settingsRouter.js') 
connectDb.connectDb()
app.set("view engine", "ejs");
app.use(expressEjsLayout);
//use bodyParser for JSON and URL encoded form bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extened: true }));

app.use(cookiePaser("nhlamulo21"));
app.use(
  connectDb.session({
    secret: "nhlamulo21",
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, //delete cookie after 1 day
    saveUninitialized: false,
    resave: false,
    store:connectDb.store,
  })
);

//mount the routes

app.use(flash());
app.use(flashMessages.flashMessage);
app.use("/", mainRouter);
app.use("/account", accountRouter.router);
app.use('/gameScores', scoreRouter)
app.use('/guest', guestRouter)
app.use('/share',shareScoreRouter)
//app.use('/multiplayer',multiplayerRouter)
app.use('/gameData',dictionaryRouter)
app.use('/gameProgress', gameProgressRouter)
app.use("/cdn", express.static("public")); // mounts the public directory to /cdn

app.use("/settings",settingsRouter)
app.use('/gameLogs', logRouter)
app.use('/gameRanks', ranksRouter)
app.use("/playerWord", wordRouter)
const port = process.env.PORT || 3000;
server.listen(port);
console.log("Express server running on port", port);

//let numberOfMultiPlayers=0

// io.on('connection',(socket) =>{
  
//   numberOfMultiPlayers++;
  
//   socket.join(Math.round(multiplayerRouter/2))
//   Socket.emit('roomNumber', roomNumber) //emit this to the client;
//   console.log('a user connected')
  
//   socket.emit('serverToClient', "Hello client");
//   socket.on('clientToServer', data=>{
//     console.log(data)
//   })

//   socket.on('clientToClient', data =>{
//     socket.broadcast.emit('serverToClient', data);
//   })
// })