'use strict'

const socket = io("http//localhost:3000")

const messageContainer = document.getElementById('messageContainer')
const messageForm = document.getElementById('sendContainer')
const inputMessage = document.getElementById('inputMessage')

//Message To Server
const name = prompt('What is your name?')
appendMessage('You joined')

 //Commented out the socket.io since is still being fully developed
socket.emit('newUser', name)

socket.on('chatMessage', data => {
 //   console.log(data)
    appendMessage(`${data.name}: ${data.message}`) //responsible to append message to the server
})

socket.on('userConnected', name => { //client
    //   console.log(name)
       appendMessage(`${name} connected`)
   })

socket.on('userDisconnected', name => { //client
    //   console.log(name)
       appendMessage(`${name} disconnected`)
   })

//Static HTML page 
messageForm.addEventListener('submit', e=>{
    e.preventDefault()
    const message = inputMessage.value
    
   // appendMessage(`You: ${message}`)  //Display You, instead of your name on the sender's side
    appendMessage(`${name}: ${message}`) //Temporary meant to reflect the person using the page
   // socket.emit('sendChatMessage',message) //Responsible to send the text to the server
    inputMessage.value = ''
})

function appendMessage(message){
    const messageElement = document.createElement('div')
    messageElement.innerText = message
    messageContainer.append(messageElement)
}