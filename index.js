"use strict";
const express = require("express");
const app = express();
const session = require("express-session");
const flash = require("connect-flash");
const cookiePaser = require("cookie-parser");
const expressEjsLayout = require("express-ejs-layouts");
const mainRouter = require("./routes/mainRouter.js");
const accountRouter = require("./routes/accountRoutes.js");
const flashMessages = require("./modules/flashMessages");
const gameRouter = require("./routes/game.js");
// loading boadyParser
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.use(expressEjsLayout);
//use bodyParser for JSON and URL encoded form bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extened: true }));

app.use(cookiePaser("nhlamulo21"));
app.use(
  session({
    secret: "nhlamulo21",
    cookie: { maxAge: 1000 * 60 * 60 * 24 }, //delete cookie after 1 day
    saveUninitialized: true,
    resave: true,
  })
);
//mount the routes

app.use(flash());
app.use(flashMessages.flashMessage);
app.use("/", mainRouter);
app.use("/account", accountRouter);

app.use('/game', gameRouter)
app.use("/cdn", express.static("public")); // mounts the public directory to /cdn


const port = process.env.PORT || 3000;
app.listen(port);
console.log("Express server running on port", port);
