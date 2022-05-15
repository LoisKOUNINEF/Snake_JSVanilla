export let snakeSpeed = 5

const scoreDisplay = document.getElementById('score')

let currentScore = 0;
let scoreCount = 0;

function score() {
  currentScore ++
  scoreCount ++
  if (currentScore < 10) {
    scoreDisplay.textContent = "00" + currentScore
  }
  else if (currentScore < 100) {
    scoreDisplay.textContent = "0" + currentScore
  }
  else {
    scoreDisplay.textContent = currentScore
  }
  if (scoreCount === 10) {
    snakeSpeed += 2
    scoreCount = 0
  }
}

export default score
