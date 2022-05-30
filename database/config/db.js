const dotenv = require('dotenv').config()
const mongoose = require('mongoose')
const uriString= process.env.ATLAS_URI;
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

module.exports = connectDb