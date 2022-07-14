import { update as updateSnake, render as renderSnake, getSnakeHead, snakeCollision } from './snake.js'
import { update as updateFood, render as renderFood } from './food.js'
import { snakeSpeed, submitScore } from './score.js'
import { outsideGrid } from './grid.js'

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board')

function main(currentTime) {
  if (gameOver) {
    submitScore(score);
    if (confirm('You lost. Press OK to retry !')) {
      window.location.reload();
    }
    return
  };

  window.requestAnimationFrame(main)
  const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
  if (secondsSinceLastRender < 1 / snakeSpeed)
    return

  lastRenderTime = currentTime

  update()
  render()
}

window.requestAnimationFrame(main)

function update() {
  updateSnake()
  updateFood()
  checkGameOver()
}

function render() {
  gameBoard.innerHTML = ''
  renderSnake(gameBoard)
  renderFood(gameBoard)
}

function checkGameOver() {
  gameOver = outsideGrid(getSnakeHead()) || snakeCollision()
}
