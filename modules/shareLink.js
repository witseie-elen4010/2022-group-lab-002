const { Int32 } = require('mongodb')
const mongoose = require('mongoose')

const userDataSchema =mongoose.Schema({
    username: {
        type: String,
        required:[true,'enter your name please'],
    },
    score: {
        type: Number,
        required: [true,'enter your email please'],
    }
   
},
{ 
    timestamps: true
}
)

module.exports=mongoose.model('UserData', userDataSchema)
