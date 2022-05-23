'use strict'

const ROWS = 6
const COLUMNS = 5

let currentAttempt = 0
let letterPosition = 0
let correctLetterCount = 0

window.onload = function () {
  initializeGrid()
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
  if (keyEvent.code === 'Enter' ) {
        update()
        currentAttempt++
        letterPosition = 0
  }
}

document.addEventListener('keyup', (keyEvent) => {
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

const onGrid = document.querySelector("[data-guess-grid]")

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
  update()
  currentAttempt++
  letterPosition = 0
}

function clickDelete(){
  if (letterPosition > 0 && letterPosition <= COLUMNS) {
    letterPosition -= 1
    const currentTile = document.getElementById(currentAttempt.toString() + '-' + letterPosition.toString() )
    currentTile.innerText = ''
  }

}

function stopInteraction () {
  document.removeEventListener('click', handleMouseClick)
}



function update () {
  correctLetterCount = 0

  for (let c = 0; c < COLUMNS; c++) {
    const currentTile = document.getElementById(
      currentAttempt.toString() + '-' + c.toString()
    )
    const letter = currentTile.innerText}
}

