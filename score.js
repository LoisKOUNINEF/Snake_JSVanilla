export let snakeSpeed = 5

const scoreDisplay = document.getElementById('score')
const bestScoreDisplay = document.getElementById('best-score')

let currentScore = 0;
let scoreCount = 0;
let currentBest = localStorage.bestScore ? JSON.parse(localStorage.bestScore) : 0

function bestScore() {
  if (currentBest < 10) {
    bestScoreDisplay.textContent = "00" + currentBest
  }
  else if (currentBest < 100) {
    bestScoreDisplay.textContent = "0" + currentBest
  }
  else {
    bestScoreDisplay.textContent = currentBest
  }
}

function scoreConfig() {
  if (currentScore < 10) {
    scoreDisplay.textContent = "00" + currentScore
  }
  else if (currentScore < 100) {
    scoreDisplay.textContent = "0" + currentScore
  }
  else {
    scoreDisplay.textContent = currentScore
  }
}

function score() {
  currentScore ++
  scoreCount ++
  if (currentScore > currentBest) {
    currentBest = currentScore
  }
  scoreConfig()
  bestScore()
  localStorage.setItem("bestScore", JSON.stringify(currentBest))
  if (scoreCount === 10) {
    snakeSpeed += 2
    scoreCount = 0
  }
}

bestScore()
scoreConfig()

export default score
