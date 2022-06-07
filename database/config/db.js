const path = require("path");
const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const uriString= process.env.ATLAS_URI;
const session = require("express-session");
const MongoDBSession=require('connect-mongodb-session')(session)

const connectDb = async () =>{
    try{
        const conn= await mongoose.connect(uriString)

        console.log('MongoDB Connected: ${conn.connection.host')
        console.log(uriString)
    }
    catch (error){
        console.log(error)
        process.exit(1)
    }

}
const store = new MongoDBSession(
    {
      uri: uriString,
      collection: "playerSessions", 
    }
)
module.exports = {connectDb, store,session}
