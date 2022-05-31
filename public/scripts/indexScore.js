'use strict'

const { gameOver, currentAttempt } = require("./gameBoard")

const tries = [ ]
const enterButton = document.querySelectorAll('[data-enter]')
const overlay = document.getElementById('overlay')
let scoreValue = document.getElementById('score-value')
let distributions = document.getElementById('guess-distribution')
let nodeTemplate = document.createElement('template')
nodeTemplate.innerHTML = '\n    <div class="myProgress">\n      <div class="myBar"> \n        </div>\n</div>\n        </div>\n <br/>'

  if(!gameOver) {
    tries[currentAttempt]++

    $('link-body').on('click', function(e){
      e.preventDefault()
      $('#theModal').modal('show').find('.modal-content').load($(this).attr('href'))
    })
        scoreDiplay()
        scoreDistribution()
    
  
  } 

function gameScore () {
  return tries.reduce((accumulator, currentValue) => accumulator + currentValue)
}

function scoreDiplay () {
  if(gameScore() === 0){
    scoreValue.innerText = 'No Data'
  } else {
    scoreValue.innerHTML = gameScore()
  }
}

function scoreDistribution () {
  if(gameScore() === 0) {
    distributions.style.textAlign = 'center'
    distributions.innerText = 'No Data'
  }
  else for(let i = 0; i < tries.length; i++ ) {
    let theNode = nodeTemplate.content.cloneNode(!0)
    let barValue = tries[i]
    let barSize =  tries.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue))
    let barWidth = (tries[i]/barSize) * 100
    let barGraph = theNode.querySelector('.myBar')
    if(barGraph.style.width = ''.concat(barWidth, '%'), "number" == typeof barValue) {
      theNode.querySelector('.myBar').textContent = barValue, barValue >= 0
    }
    distributions.appendChild(theNode)
  }
}