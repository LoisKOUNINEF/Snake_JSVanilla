import { getInputDirection } from './input.js'
const scoreDisplay = document.getElementById('score')

let score = 0;
let scoreCount = 0;

export let snakeSpeed = 5

let result = 0
let newSegment = 0

const snakeBody = [{ x: 11, y: 11 }]

export function update() {
  addSegment()
  const inputDirection = getInputDirection()
  for(let i = snakeBody.length - 2; i >= 0; i--) {
    snakeBody[i + 1] = { ...snakeBody[i] }
  }
  snakeBody[0].x += inputDirection.x
  snakeBody[0].y += inputDirection.y
}

export function render(gameBoard) {
  snakeBody.forEach(segment => {
    const snakePart = document.createElement('div')
    snakePart.style.gridRowStart = segment.y
    snakePart.style.gridColumnStart = segment.x
    snakePart.classList.add('snake')
    gameBoard.appendChild(snakePart)
  })
}

export function expandSnake(amount) {
  newSegment += amount
}

export function onSnake(position, { ignoreHead = false } = {}) {
  return snakeBody.some((segment, index) => {
    if (ignoreHead && index === 0) return false
      return equalPositions(segment, position)
  })
}

export function getSnakeHead() {
  return snakeBody[0]
}

export function snakeCollision() {
  return onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPositions(pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

function addSegment() {
  for (let i = 0; i < newSegment; i++) {
    snakeBody.push({ ...snakeBody[snakeBody.length - 1]})
    // equivalent to
    // snakeBody[snakeBody.length] = { ...snakeBody[snakeBody.length - 1]}
    score ++
    scoreCount ++
    scoreDisplay.textContent = score
    if (scoreCount === 10) {
      snakeSpeed += 2
      scoreCount = 0
      console.log(snakeSpeed)
    }
  }
  newSegment = 0
}
