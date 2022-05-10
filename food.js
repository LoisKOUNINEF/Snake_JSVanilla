import { onSnake, expandSnake } from './snake.js'
import { randomPosition } from './grid.js'

let food = getRandomFoodPosition()
const snakeExpansion = 1

export function update() {
  if (onSnake(food)) {
    expandSnake(snakeExpansion)
    food = getRandomFoodPosition()
  }
}

export function render(gameBoard) {
    const foodPart = document.createElement('div')
    foodPart.style.gridRowStart = food.y
    foodPart.style.gridColumnStart = food.x
    foodPart.classList.add('food')
    gameBoard.appendChild(foodPart)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while (newFoodPosition == null || onSnake(newFoodPosition)) {
    newFoodPosition = randomPosition()
  }
  return newFoodPosition
}
