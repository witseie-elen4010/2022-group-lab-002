'use strict'

let countDownHours = new Date('Jan 01, 2050 23:59:59').getTime()
    
    let timerObject = setInterval(function countDownTimer() {
        let timeNow = new Date().getTime()
        let  timeDifference = countDownHours - timeNow
      
        let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
        let seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)
        
        document.getElementById('timer').innerHTML = hours + ':' + minutes + ':' + seconds
        
        if (timeDifference < 0) {
          clearInterval(timerObject)
        }
    }, 1000)
 