'use strict'

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

const ROWS = 6
const COLUMNS = 5
let currentAttempt = 0
let letterPosition = 0
let correctLetterCount = 0

let colours = []
let attemptedWords = []

window.onload = function () {
  initializeGrid()
  modal.classList.add('active')
}

//* ************ Game BOARD **********************
function initializeGrid () {
    // create grid
    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLUMNS; c++) {
        const tile = document.createElement('span')
        tile.id = r.toString() + '-' + c.toString()
        tile.classList.add('tile')
        tile.innerText = ''
        document.getElementById('board').appendChild(tile)
      }
    }
}

  //* ************ User Keyboard inputs **********************
  //Physical keyboard
function enterLetter (keyEvent) {
    if (keyEvent.code >= 'KeyA' && keyEvent.code <= 'KeyZ') {
    if (letterPosition < COLUMNS) {
      const currentTile = document.getElementById(currentAttempt.toString() + '-' + letterPosition.toString() )
      if (currentTile.innerText === '') {
        currentTile.innerText = keyEvent.code[3]
        letterPosition++
      }
    }
  }
}
  //* ***********************Loading Sound Effects ****************
    let mute = false


function getNewWord(){
  let newWord =''
  if((currentAttempt+1)<= ROWS){
    for (let i=0; i<COLUMNS;i++){
      const currentTile = document.getElementById(currentAttempt.toString() + '-' + i.toString() )
      newWord = newWord +currentTile.innerText
    }
  }
  else {newWord = ''}

  return newWord
}
 function muteAudio () { //Function to mute sound when the mute Icon is pressed
      mute = true
 }
  
function unMuteAudio () { //Function to unmute sound when the sound Icon is pressed
      mute = false
 }
    
function dropletFxPlay () {
        const audio = new Audio('/cdn/audioFX/Droplet2.wav')
        if (mute === false) {
          audio.play()
        }
 }
    
function buzzFxPlay () {
        audio = new Audio('/cdn/audioFX/Buzzer1.wav')
    
        if (mute === false) { audio.play() }
 }
   
function startGameFxPlay () {
        audio = new Audio('/cdn/audioFX/90DBM_perc_play.wav')
    
        if (mute === false) { audio.play() }
}
    
      function winGameFxPlay () {
        audio = new Audio('/cdn/audioFX/CowBell_perc_play.wav')
    
        if (mute === false) { audio.play() }
}
    
      function looserSoundFxPlay () {
        audio = new Audio('/cdn/audioFX/CryingFx.wav')
    
        if (mute === false) { audio.play() }
}
    
      function lockFxPlay () {
        audio = new Audio('/cdn/audioFX/LockFx.wav')
    
        if (mute === false) { audio.play() }
 }
  
  // ************************** NK ********************************//
function deleteLetter (keyEvent) {
  if (keyEvent.code === 'Backspace') {
    if (letterPosition > 0 && letterPosition <= COLUMNS) {
      letterPosition -= 1
      const currentTile = document.getElementById(currentAttempt.toString() + '-' + letterPosition.toString() )
      currentTile.innerText = ''
    }
  }
}

function submitGuess (keyEvent) {
  if (keyEvent.code === 'Enter') {
    verifyWords()}
}

document.addEventListener('keyup', (keyEvent) => {
  if (correctLetterCount==COLUMNS) return
  // Press Letters
  enterLetter(keyEvent)
  // Press Backspace
  deleteLetter(keyEvent)
  // Press Enter
  submitGuess(keyEvent)
  dropletFxPlay () //Sound effect when key is pressed
})

  //Virtual keyboard

startInteraction()

function startInteraction () {
  document.addEventListener("click", handleMouseClick)
}

function handleMouseClick (e) {
  if(correctLetterCount==COLUMNS) return
  
  if (e.target.matches('[data-key]')) {
    clickLetter(e.target.dataset.key)
    return
  }
  if (e.target.matches('[data-enter]')) {
    clickEnter()
    return
  }
  if (e.target.matches('[data-delete]')) {
     clickDelete()
    return
  } 
}

function clickLetter(keyEvent){
  const currentTile = document.getElementById(currentAttempt.toString() + '-' + letterPosition.toString())
  if (letterPosition < COLUMNS) {
  if (currentTile.innerText === '') {
      currentTile.innerText = keyEvent.toLowerCase()
      currentTile.textContent = keyEvent
      letterPosition++
  }}
}

function clickEnter(){
  verifyWords()
}

function clickDelete(){
  if (letterPosition > 0 && letterPosition <= COLUMNS) {
    letterPosition -= 1
    const currentTile = document.getElementById(currentAttempt.toString() + '-' + letterPosition.toString() )
    currentTile.innerText = ''
  }
}

function verifyWords(){
  const playerWord=getNewWord()
  let inputObject = {getNewWord:playerWord, currentAttempt:currentAttempt}

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(inputObject)
  }
  fetch('/account/play/api', options)
  .then(response => response.json())
  .then(data =>{
    const colours= data.colours;
    const winState= data.winState
    const loseState = data.loseState
    const targetWord = data.generatedWord
    const isPresent = data.isPresent
    
    if(isPresent){
      console.log("from server: ",currentAttempt)
    update(colours,winState,loseState,targetWord)
    colours=[]
    letterPosition = 0
    attemptedWords.push(getNewWord()) 
     
    if(currentAttempt < ROWS){ lockFxPlay () }//Sound effect when a word is added
    }else{alert(`${getNewWord()} is invalid. Try again`) }

   })
  .catch( err=> console.log('Error'))
}
// ****************** CHECK GAME PROGRESS **********************
function update (colours,winState,loseState,targetWord) {
  correctLetterCount = 0
  for (let c = 0; c < COLUMNS; c++) {

    const currentTile = document.getElementById(currentAttempt.toString() + '-' + c.toString())
    // is the letter in the correct position
    if (colours[c] === "green") {
      currentTile.classList.add('correct')
      correctLetterCount++
    } else if (colours[c] === "yellow") { currentTile.classList.add('present')}
     else {currentTile.classList.add('absent')}
  }
  currentAttempt++
  letterPosition =0
  colours =[]
  winConditions (winState,loseState,targetWord)
}

// ****************** WINNING CONDITIONS **********************
function winConditions (winState,loseState,targetWord) {
  // Win Condition
  if (winState) {
    alert('YOU WIN')
    inGameFxPlay() //Winning sound effect
    return true
  }
  // loose condition
  else if(loseState){
    alert(`You loose, ANSWER :${targetWord}`)
    looserSoundFxPlay() //Looser sound effect
    return true}
    else {return false}
}


function getAttempt(currentAttempt){
  return currentAttempt1
}
// ********************** INSTRUCTIONS ***************************8

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach((modal) => {
    closeModal(modal)
  })
})

overlay.classList.add('active')

closeModalButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
})

function closeModal (modal) {
  if (modal == null) return
  modal.classList.remove('active')
  overlay.classList.remove('active')
}