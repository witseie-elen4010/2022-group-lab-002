const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')

const connectDb = async () =>{
    try{
        const conn= await mongoose.connect(process.env.ATLAS_URI)

        console.log('MongoDB Connected: ${conn.connection.host')
    }
    catch (error){
        console.log(error)
        process.exit(1)
    }

}

module.exports = connectDb