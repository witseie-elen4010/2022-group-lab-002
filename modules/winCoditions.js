'use strict'

function winConditions (count, attempts) {
    // Win Condition
    if (count === COLUMNS) {
      alert('YOU WIN')
      gameOver = true
      return gameOver
    }
    // Lose condition
    if((attempts+1) === ROWS){
      alert(`The correct word is ${targetWord}`)
      gameOver = true
      return gameOver
    }
  }

  module.exports = winConditions