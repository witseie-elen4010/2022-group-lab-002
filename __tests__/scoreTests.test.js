'use strict'

const { request } = require('express')
const gameScore = require('../modules/scoreData.js')

test('Player can get data from the database', () => {
  let data = await request()
  
  expect(res.statusCode).toBe(200)
})

