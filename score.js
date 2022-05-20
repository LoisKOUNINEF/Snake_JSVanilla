export let snakeSpeed = 5

const scoreDisplay = document.getElementById('score')
const bestScoreDisplay = document.getElementById('best-score')

let currentScore = 0;
let scoreCount = 0;
let currentBest = localStorage.bestSnakeScore ? JSON.parse(localStorage.bestSnakeScore) : 0

function bestScoreConfig() {
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

function currentScoreConfig() {
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

function increaseSpeed() {
    if (scoreCount === 10) {
    snakeSpeed += 2
    scoreCount = 0
  }
}

function score() {
  currentScore ++
  scoreCount ++
  if (currentScore > currentBest) {
    currentBest = currentScore
  }
  currentScoreConfig()
  bestScoreConfig()
  localStorage.setItem("bestSnakeScore", JSON.stringify(currentBest))
  increaseSpeed()
}

bestScoreConfig()
currentScoreConfig()

export default score
