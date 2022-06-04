'use strict'

function check(currentTile,letter,colours){
// is the letter in the correct position
if (targetWord[c] === letter) {
    currentTile.classList.add('correct')
    correctLetterCount++
    colours.push("green")
  } else if (targetWord.includes(letter)) {
    // is it in the word?
    currentTile.classList.add('present')
    colours.push("yellow")
  } else {
    // No in the word
    currentTile.classList.add('absent')
    colours.push("grey")
  }

return [correctLetterCount, colours]}

  module.exports =check