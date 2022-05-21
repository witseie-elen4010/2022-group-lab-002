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

verify: function(player)
{
    return Players.find((elem)=>player.email===elem.email && player.password===elem.password && player.username===elem.username)
},
    getData: function(){
        return Players
    }
}