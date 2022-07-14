import { API_KEY } from './key.js';

export let snakeSpeed = 4;

const scoreDisplay = document.getElementById('score');
const bestScoreDisplay = document.getElementById('best-score');

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
  currentScore += Math.round(snakeSpeed / 2)
  scoreCount ++
  if (currentScore > currentBest) {
    currentBest = currentScore
  }
  currentScoreConfig()
  bestScoreConfig()
  localStorage.setItem("currentSnakeScore", JSON.stringify(currentScore))
  localStorage.setItem("bestSnakeScore", JSON.stringify(currentBest))
  increaseSpeed()
}

export function submitScore() {
  let userScore = parseInt(localStorage.currentSnakeScore);

  let userEmail = localStorage.sharcadEmail
  ? JSON.parse(localStorage.sharcadEmail)
  : prompt("Enter your shaRcade email to send your score !");

  if (userEmail) {
    localStorage.setItem("sharcadEmail", JSON.stringify(userEmail));

    const data = {
      "score_token" : {
        "hi_score" : userScore,
        "api_key" : API_KEY,
        "user_email" : userEmail
      }
    };
    fetch(`https://sharcade-api.herokuapp.com/sharcade_api`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .catch((error) => console.log(error));
  }
}

bestScoreConfig()
currentScoreConfig()

export default score
