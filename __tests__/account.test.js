'use strict'

const Players=[]

module.exports={
    add: function(player)
    {
    //if(!this.alreadyExists(player)){
    Players.push(player)
    //console.log(Players)
    
    },

alreadyExists: function(email){
    
    return Players.find((elem)=>email===elem.email)

},

verify: function(player)
{
    //return !!(elem.username===player.username && elem.email===player.email && elem.password===player.password)
    return Players.find((elem)=>player.email===elem.email && player.password===elem.password && player.username===elem.username)
},
    getData: function(){
        return Players
    }
    //add function to verify if entered details are authentic (follows correct format)
}