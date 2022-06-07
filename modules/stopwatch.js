'use strict'

let intervals = null
let timer = 0

function timerStart () { timer++ }

module.exports  = {
    start: function () {
        if(intervals != null){ clearInterval(intervals) }
        intervals = setInterval(timerStart, 10)
    },
    reset: function () {
        clearInterval(intervals)
    },
    getTime: function () {
        if(intervals != null) { return timer }
        return
    }
}