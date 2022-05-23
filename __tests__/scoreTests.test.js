'use strict'

const gameScore = require('../modules/scoreData.js')
test('Score do not display if the player has not guessed any word yet', () => {
  gameScore.add(2)
  expect(gameScore.getData().length).toBe(1)
})

