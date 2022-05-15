let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }


function keyboardControls (e) {
  switch (e.key) {
    case 'ArrowUp':
    moveUp()
    break
    case 'ArrowDown':
    moveDown()
    break
    case 'ArrowLeft':
    moveLeft()
    break
    case 'ArrowRight':
    moveRight()
    break
  }
}

function moveUp() {
  if (lastInputDirection.y !== 0) {return}
    inputDirection = { x: 0, y: -1}
};

function moveDown() {
  if (lastInputDirection.y !== 0) {return}
    inputDirection = { x: 0, y: 1}
};

function moveLeft() {
  if (lastInputDirection.x !== 0) {return}
    inputDirection = { x: -1, y: 0}
};

function moveRight() {
  if (lastInputDirection.x !== 0) {return}
    inputDirection = { x: 1, y: 0}
};

window.addEventListener('keydown', keyboardControls)

export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}
