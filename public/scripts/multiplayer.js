'use strict'
//const socket =io('https://localhost:3000');

// socket.on('serverToClient',(data)=>{
//     alert(data)
// })
const socket =io();
socket.emit('chat message', "Hello server");