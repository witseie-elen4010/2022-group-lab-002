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
const logRouter = require('./routes/logRoutes')
const connectDb = require('./database/config/db')
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
<<<<<<< HEAD
app.use('/gameLogs', logRouter)
app.use('/game', gameRouter)
=======
app.use('/guest', guestRouter)
>>>>>>> main
app.use('/share',shareScoreRouter)
app.use('/gameData',dictionaryRouter)
app.use('/gameProgress', gameProgressRouter)
app.use("/cdn", express.static("public")); // mounts the public directory to /cdn

app.use("/settings",settingsRouter)

const port = process.env.PORT || 3000;
app.listen(port);
console.log("Express server running on port", port);
