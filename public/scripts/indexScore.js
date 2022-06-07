'use strict'

let attemptsData = [ ]
let button = document.getElementById('student')
let scoreValue = document.getElementById('score-value')
let distributions = document.getElementById('guess-distribution')
let nodeTemplate = document.createElement('template')
nodeTemplate.innerHTML = '\n  <div class="guess"></div> \n  <div class="my-progress">\n      <div class="my-bar"> \n        </div>\n</div>\n        </div>\n'

button.addEventListener('click', function () {
  scoreDiplay()
  scoreDistribution()
}, false)


fetch('/gameScores/api/scores') // Returns a Promise for the GET request
  .then(response => {
    if (response.ok) { return response.json() } // Return the response parse as JSON
    else { throw 'Failed to load classlist: response code invalid!' }
  })
  .then(playerScore => {
    playerScore.forEach(data => {
      attemptsData = data.attempts
    })
    //attemptsData = playerScore.attempts.slice()
  })
  .catch(e => {
    alert(e)
  })

function gameScore () {
  return attemptsData.reduce((accumulator, currentValue) => accumulator + currentValue)
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
  } else for(let i = 0; i < attemptsData.length; i++ ) {
    let theNode = nodeTemplate.content.cloneNode(!0)
    let barValue = attemptsData[i]
    
    let barSize =  attemptsData.reduce((accumulator, currentValue) => Math.max(accumulator, currentValue))
    let barWidth = Math.max(7, Math.round(barValue / barSize * 100));

    let barGraph = theNode.querySelector('.my-bar')
    if(barGraph.style.width = ''.concat(barWidth, '%'), "number" == typeof barValue) {
      theNode.querySelector('.my-bar').textContent = barValue, barValue > 0
    }
    if(distributions.childElementCount <= 10)
      distributions.appendChild(theNode) 
  }
}
