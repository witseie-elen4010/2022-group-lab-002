'use strict'

const Players=[]

module.exports={
add: function(player)
    {
    Players.push(player)    
    },

alreadyExists: function(email, username){
    
    return Players.find((elem)=>email===elem.email ||username===elem.username)

},

verify: function(username,password)
{
    return Players.find((elem)=>username===elem.username && password===elem.password)
},
    getData: function(){
        return Players
    }
}