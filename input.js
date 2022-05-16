let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

let touchstartX = 0
let touchendX = 0
let touchstartY = 0
let touchendY = 0

const slider = document.querySelector('body')

function touchControls() {
  if (touchendX < touchstartX) moveLeft();
  if (touchendX > touchstartX) moveRight();
  if (touchendY < touchstartY) moveUp();
  if (touchendY > touchstartY) moveDown();
}

slider.addEventListener('touchstart', e => {
  touchstartX = e.changedTouches[0].screenX
  touchstartY = e.changedTouches[0].screenY
})

slider.addEventListener('touchend', e => {
  touchendX = e.changedTouches[0].screenX
  touchendY = e.changedTouches[0].screenY
  touchControls()
})

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
