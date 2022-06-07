const mongoose = require('mongoose')

const wordSchema=mongoose.Schema({
    username: {
        type: String,
        required:[true,'enter your name please'],
    },
    word:{
        type: String,
        required: [true,'enter your word please']
    }
},
{ 
    timestamps: true
}
)

module.exports=mongoose.model('playerWord', wordSchema)