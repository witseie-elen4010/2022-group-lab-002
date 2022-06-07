'use strict'
// hider
const coll = document.getElementsByClassName('hider')
for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener('click', function () {
    this.classList.toggle('active')
    const content = this.nextElementSibling
    if (content.style.maxHeight) {
      content.style.maxHeight = null
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  })
}

function sendButton () {
  getResponse()
}

function thumbsUp () {
  buttonSendText('Got It, Thank You!')
}

function thumbsDown () {
  buttonSendText("Still Don't get it ... !")
}

function getTime () {
  const today = new Date()
  let min = today.getMinutes()
  let hrs = today.getHours()
  if (hrs < 10) {
    hrs = '0' + hrs
  }
  if (min < 10) {
    min = '0' + min
  }
  const time = hrs + ':' + min
  return time
}

// Generates the first message
function welcomeMessage () { // Function responsible for sending the first welcoming Text
  const firstMessage = 'Welcome to the Extreme Worlde Game Chat Box: Feel Free to ask any of your questions about our Extreme Worlde Game...'
  document.getElementById('botStarterMessage').innerHTML = '<p class="respondText"><span>' + firstMessage + '</span></p>'
  const time = getTime()
  $('#chatTimeStamp').append(time)
  document.getElementById('userInput').scrollIntoView(false)
}

welcomeMessage() // Auto generate Welcome text when the chat box is opened

// Retrieves the response
function autoSimulateRespond (clientMessage) {
  /** ******************************************************************************************** */
  const time = getTime()
  const botHtml = '<p class="respondText"><span>' + clientMessage + '</span></p>'
  $('#chatbox').append(time)
  $('#chatbox').append(botHtml)
  document.getElementById('bottomChatBar').scrollIntoView(true)
/** *********************************************************************************************** */
}

// Gets the text text from the input box and processes it
function getResponse () {
  let clientMessage = $('#textInput').val()

  if (clientMessage == '') {
    clientMessage = '...'
  }

  const userHtml = '<p class="clientMessage"><span>' + clientMessage + '</span></p>'
  $('#textInput').val('')
  $('#chatbox').append(userHtml)
  document.getElementById('bottomChatBar').scrollIntoView(true)
  // Placed '...' as placeholder
  autoSimulateRespond('...') // Place the response here
}

// Handles sending text via button clicks
function buttonSendText (clientMessage) {
  const userHtml = '<p class="clientMessage"><span>' + clientMessage + '</span></p>'
  const time = getTime()

  $('#chatbox').append(time)
  $('#textInput').val('')
  $('#chatbox').append(userHtml)
  document.getElementById('bottomChatBar').scrollIntoView(true)
}

// Press enter to send a message
$('#textInput').keypress(function (e) {
  if (e.which == 13) {
    getResponse()
  }
})
