const touchableElement = document.querySelector('body')

let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }


function keyboardControls(e) {  switch (e.key) {
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
}}

function touchControls() {
  if (touchendX < touchstartX) {
    moveLeft()
  }

  if (touchendX > touchstartX) {
    moveRight()
  }

  if (touchendY < touchstartY) {
    moveUp()
  }

  if (touchendY > touchstartY) {
    moveDown()
  }

};

function moveUp() {
  if (lastInputDirection.y !== 0) {return}
    inputDirection = { x: 0, y: -1}
};

function moveRight() {
  if (lastInputDirection.x !== 0) {return}
    inputDirection = { x: 1, y: 0}
};

function moveLeft() {
 if (lastInputDirection.x !== 0) {return}
  inputDirection = { x: -1, y: 0}
};

function moveDown() {
  if (lastInputDirection.y !== 0) {return}
    inputDirection = { x: 0, y: 1}
};

window.addEventListener('keydown', keyboardControls);

touchableElement.addEventListener('touchstart', function (event) {
  touchstartX = event.changedTouches[0].screenX;
  touchstartY = event.changedTouches[0].screenY;
}, false);

touchableElement.addEventListener('touchend', function (event) {
  touchendX = event.changedTouches[0].screenX;
  touchendY = event.changedTouches[0].screenY;
  touchControls();
}, false);


export function getInputDirection() {
  lastInputDirection = inputDirection
  return inputDirection
}
