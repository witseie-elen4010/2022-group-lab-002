'use strict'

const twitter = document.getElementById('twitter')
const telegram = document.getElementById('telegram')
const whatsapp = document.getElementById('whatsapp')
const showScore = document.getElementById('showScore')
const pageUrl = location.href
console.log(pageUrl) // Reference of PC


const numberOfWins = 0
const numberOfWinsText = `The Player Won: ${numberOfWins}`

const numberOfTries = 0
const numberOfTriesText = `Player's Attempts: ${numberOfTries}`

const totalScore = 0
const totalScoreText = `Player's Total Score: ${totalScore}`

const scoreBoard = ` ${gameName} \n ${numberOfWinsText} \n ${numberOfTriesText} \n ${totalScoreText} \n Link: \n ${pageUrl}`
let message = scoreBoard

showScore.addEventListener('click', () =>{
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

let scoreArray = [numberOfWins,numberOfTries,totalScore]

function scoreArrayFunction(){
  return scoreArray
}

module.exports = scoreArrayFunction
