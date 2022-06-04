'use strict'

const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

const ROWS = 6
const COLUMNS = 5
let gameState=false;
let currentAttempt = 0
let letterPosition = 0
let correctLetterCount = 0

let gameOver = false

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
        console.log("user attempts: ",currentAttempt)
      }
    }
  }
}

function getNewWord(){
  let newWord =''
  for (let i=0; i<COLUMNS;i++){
    const currentTile = document.getElementById(currentAttempt.toString() + '-' + i.toString() )
    newWord = newWord +currentTile.innerText
  }
  return newWord
}

function deleteLetter (keyEvent, getNewWord) {
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
    verifyWords()
  }
}

document.addEventListener('keyup', (keyEvent) => {
  if (gameOver) return
  // Press Letters
  enterLetter(keyEvent)
  // Press Backspace
  deleteLetter(keyEvent)
  // Press Enter
  submitGuess(keyEvent)
})

  //Virtual keyboard

startInteraction()

function startInteraction () {
  document.addEventListener("click", handleMouseClick)
}

function handleMouseClick (e) {
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
  currentAttempt++
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
 console.log(inputObject)
  fetch('/game/guest/api', options)
  .then(response => response.json())
  .then(data =>{
    const colours= data.colours;
    gameState= data.gameState
    const isPresent = data.isPresent
    //= data.nextAttempt
    
    if(isPresent){
      console.log("from server: ",currentAttempt)
    update(colours)
    colours=[]
    console.log("currentAttempt", currentAttempt)
    letterPosition = 0
    attemptedWords.push(getNewWord()) 
    }else{alert(`${getNewWord()} is invalid. Try again`) }

   })
  .catch( err=> console.log('Error'))
}
// ****************** CHECK GAME PROGRESS **********************
function update (colours) {
  correctLetterCount = 0
  console.log("GAME COLOURS",colours)
  let word =[]
  for (let c = 0; c < COLUMNS; c++) {

    const currentTile = document.getElementById(currentAttempt.toString() + '-' + c.toString())
    // is the letter in the correct position
    if (colours[c] === "green") {
      currentTile.classList.add('correct')
    } else if (colours[c] === "yellow") { currentTile.classList.add('present')}
     else {currentTile.classList.add('absent')}
      word.push(currentTile.innerText)
  }
  console.log('Current row',currentAttempt)
  console.log('Current word',word)
  currentAttempt++
  letterPosition =0
  colours =[]
  winConditions ()
}

// ****************** WINNING CONDITIONS **********************
function winConditions () {
  // Win Condition
  if (gameState) {
    alert('YOU WIN')
  }
  // Lose condition
  else
    alert(`The correct word is ${targetWord}`)
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