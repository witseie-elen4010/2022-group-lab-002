'use strict'

const gameResult = require('../modules/dictionary')

test('Correct word', () => {
  expect(gameResult.checkWord("APPLE","APPLE")).toStrictEqual(["green","green","green","green","green"])
})

test('Lost at last attempt', () => {
    expect(gameResult.loseCodintion(6)).toBe(false)
})

test('Not a valid word', () => {
    expect(gameResult.isValidWord("AEIOU")).toBe(false)
  })

  test('Valid word', () => {
    expect(gameResult.isValidWord("SCARY")).toBe(true)
  })