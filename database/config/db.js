const path = require("path");
const dotenv = require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })
const mongoose = require('mongoose')
//const uriString= process.env.ATLAS_URI;
const ATLAS_URI="mongodb+srv://Mulow21:1234%40Mulow@extreme-wordle.w2l6awc.mongodb.net/playersAccount?retryWrites=true"  
//console.log('here...', path.resolve(__dirname, '../../.env'), uriString)
const session = require("express-session");
const MongoDBSession=require('connect-mongodb-session')(session)

const connectDb = async () =>{
    try{
        const conn= await mongoose.connect(ATLAS_URI)

        console.log('MongoDB Connected: ${conn.connection.host')
        console.log(ATLAS_URI)
    }
    catch (error){
        console.log(error)
        process.exit(1)
    }

}
const store = new MongoDBSession(
    {
      uri: ATLAS_URI,
      collection: "playerSessions", 
    }
)
module.exports = {connectDb, store,session}