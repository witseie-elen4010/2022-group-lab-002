'use strict'

module.exports = {

    initScore :function (username, score){ 
        return score==0
    }, 

    upDateScore :function (username, score){ 
        return username.score==score
    }, 

    getHomePageLink: function() {
               
        return 'https://extremewordle.azurewebsites.net';
    },

    getWhatsAppShareLink: function(){
        return 'https://wa.me/?text=';
    },

    getTwitterShareLink: function(){
        return 'https://twitter.com/intent/tweet?text=';
    },
    
    getTelegramShareLink: function(){
        return 'https://t.me/share/url?url=';
    }
}