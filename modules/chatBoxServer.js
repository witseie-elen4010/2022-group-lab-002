'use strict'

const io = require("socket.io")(3000)

const users = {}
//Server sending broadcast to clients or script.js paired by the broadcast
io.on('connection', socket => {
    //console.log('new User')
    socket.on('newUser', name =>{
        users[socket.id] =name
        socket.broadcast.emit('userConnected', name) 
    })
    //socket.EventEmitter('chat-message', 'Hello-World')
    socket.on('sendChatMessage', message => {
     //   console.log(message)
    socket.broadcast.emit('chatMessage', {message: message, name: users[socket.id] })
    })
    socket.on('disconnect', () =>{
        socket.broadcast.emit('userDisconnected', users[socket.id])
        delete users[socket.id] 
    })
  })