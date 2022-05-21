'use strict'

const tries = [ 3, 0, 0, 0, 1, 0 ]
let button = document.getElementById('student')
let scoreValue = document.getElementById('scoreValue')
let distributions = document.getElementById('guess-distribution')
let nodeTemplate = document.createElement('template')
nodeTemplate.innerHTML = '\n    <div class="myProgress">\n      <div class="myBar"> \n        </div>\n</div>\n        </div>\n <br/>'



button.addEventListener('click', function () {
  scoreDiplay()
  scoreDistribution()
}, false)


function gameData (a, b) {
  return a + b
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