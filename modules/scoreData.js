'use strict'

const list = []

  module.exports = {
    add: function (score) {
      list.push(score)
    },
    getData: function () {
      return list
    }
  }