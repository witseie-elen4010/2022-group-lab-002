'use strict'

const Players=[]

module.exports={
add: function(player)
    {
    Players.push(player)    
    },

alreadyExists: function(email){
    
    return Players.find((elem)=>email===elem.email)

},

verify: function(username,password)
{
    return Players.find((elem)=>username===elem.username && password===elem.password)
},
    getData: function(){
        return Players
    }
}