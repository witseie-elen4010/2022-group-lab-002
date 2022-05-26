const mongoose = require('mongoose')

const playerSchema=mongoose.Schema({
    username: {
        type: String,
        required:[true,'enter your name please'],
    },
    email: {
        type: String,
        required: [true,'enter your email please'],
    },
    password:{
        type: String,
        required: [true,'enter your password please']
    }
   
   
},
{ 
    timestamps: true
}
)

module.exports=mongoose.model('players', playerSchema)
