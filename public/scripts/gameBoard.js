'use strict'

const ROWS = 6
const COLUMNS = 5

const firstRow = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P']
const secondRow = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L']
const thirdRow = ['Z', 'X', 'C', 'V', 'B', 'N', 'M']
const enter = 'Ent'
const del = 'Del'

let currentAttempt = 0
let letterPosition = 0
let correctLetterCount = 0

window.onload = function () {
  initializeGrid()
  initializeVirtualKeyBoard()
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
  
  //* ************ virtual keyboard **********************
  
  function initializeVirtualKeyBoard () {
    // create virtual keyboard
    addLettterRow(firstRow)
    addSpace()
  
    addLettterRow(secondRow)
    addSpace()
  
    addSpecialChar(enter)
    addLettterRow(thirdRow)
    addSpecialChar(del)
  }
  
  function addLettterRow (arr) {
    for (let i = 0; i < arr.length; i++) {
      const letter = document.createElement('button')
      letter.setAttribute('class', 'key')
      letter.setAttribute('id', 'key')
      letter.innerText = arr[i].toString()
      letter.classList.add('letter')
      document.getElementById('vKeyboard').appendChild(letter)
    }
  }
  
  function addSpecialChar (char) {
    const edgeChar = document.createElement('button')
    edgeChar.setAttribute('class', 'key')
    edgeChar.setAttribute('id', 'key')
    edgeChar.innerText = char
    edgeChar.classList.add(char)
    document.getElementById('vKeyboard').appendChild(edgeChar)
  }
  
  function addSpace () {
    const space = document.createElement('div')
    space.className = 'space'
    document.getElementById('vKeyboard').appendChild(space)
  }


  //* ************ User Keyboard inputs **********************
function enterLetter (keyEvent) {

    if (keyEvent.code >= 'KeyA' && keyEvent.code <= 'KeyZ') {
    if (letterPosition < COLUMNS) {
      const currentTile = document.getElementById(
        currentAttempt.toString() + '-' + letterPosition.toString()
      )
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
  if (keyEvent.code === 'Enter') {
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


function update () {
  correctLetterCount = 0

  for (let c = 0; c < COLUMNS; c++) {
    const currentTile = document.getElementById(
      currentAttempt.toString() + '-' + c.toString()
    )
    const letter = currentTile.innerText}
}
