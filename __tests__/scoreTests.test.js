'use strict'

const gameScore = require('../modules/scoreData.js')
test('Score do not display if the player has not guessed any word yet', () => {
  
  //let data = gameScore.getData()
  gameScore.add(2)

  expect(gameScore.getData().length).toBe(1)
})

