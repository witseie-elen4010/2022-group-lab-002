'use strict'

const twitter = document.getElementById('twitter')
const telegram = document.getElementById('telegram')
const whatsapp = document.getElementById('whatsapp')

const invitation = document.getElementById('invitation')

const pageUrl = new URL('https://extremewordle.azurewebsites.net')

const gameName = 'Extreme Worlde Game Score Board: '
//
fetch('/playerShare/api/shareScore')
  .then(function (response) {
    if (response.ok) { return response.json() } // Return the response parse as JSON
    else { throw 'Failed to load gameScores: response code invalid!' }
  })
  .then(function (data) {
    const numberOfWins = data.score
  })
  .catch(function (e) {
    alert(e)
  })

//
// const numberOfWins = 0
console.log(numberOfWins) // Can't be viewed because it is in the client side
const numberOfWinsText = `The Player Won: ${numberOfWins}`

const numberOfTries = 0 //Expected to be fetched from the database, board Creater -> Not available Yet
const numberOfTriesText = `Player's Attempts: ${numberOfTries}`

const totalScore = 0  //Expected to be fetched from the database, board Creater -> Not available Yet
const totalScoreText = `Player's Total Score: ${totalScore}`

const invitationMessage = `Hey There!!! Come Try your luck in the Extreme Worlde Game... Can you guess my 5 Letter Word??? \n Link: \n ${pageUrl}`
const scoreBoard = ` ${gameName} \n ${numberOfWinsText} \n ${numberOfTriesText} \n ${totalScoreText} \n Link: \n ${pageUrl}`
let message = scoreBoard

invitation.addEventListener('click', () => {
  console.log('invitation button clicked')
  message = invitationMessage
})

showScore.addEventListener('click', () => {
  console.log('showScore button clicked')
  message = scoreBoard
})

telegram.addEventListener('click', () => {
  console.log('twitter button clicked')
  window.open(`https://t.me/share/url?url= ${message} `)
})

twitter.addEventListener('click', () => {
  console.log('telegram button clicked')
  window.open(`https://twitter.com/intent/tweet?text= ${message} `)
})

whatsapp.addEventListener('click', () => {
  console.log('Whatsapp button clicked')
  window.open(`https://wa.me/?text= ${message} `)
})

message = scoreBoard

const scoreArray = [numberOfWins, numberOfTries, totalScore]

function scoreArrayFunction () {
  return scoreArray
}

module.exports = scoreArrayFunction
