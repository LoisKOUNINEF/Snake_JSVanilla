import { update as updateSnake, render as renderSnake, getSnakeHead, snakeCollision } from './snake.js'
  import { update as updateFood, render as renderFood } from './food.js'
  import { snakeSpeed } from './score.js'
  import { outsideGrid } from './grid.js'

  let lastRenderTime = 0
  let gameOver = false
  const gameBoard = document.getElementById('game-board')

  function main(currentTime) {
    if (gameOver) {
      if (confirm('Do you want to send your score to shaRcade amazing platform ?')) {
        submitScore(score);
      }
      if (confirm('You lost. Press OK to retry !')) {
        window.location.assign('https://loiskouninef.github.io/Snake_JSVanilla/');
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

  function submitScore() {
    let userScore = parseInt(localStorage.currentSnakeScore);

    let userEmail = localStorage.sharcadEmail
    ? JSON.parse(localStorage.sharcadEmail)
    : prompt("Enter your shaRcade email to send your score !");

    if (userEmail) {
      localStorage.setItem("sharcadEmail", JSON.stringify(userEmail));

      const data = {
        "score_token" : {
          "hi_score" : userScore,
          "api_key" : "TKPHOpXnusudoO1H",
          "user_email" : userEmail
        }
      };
      fetch(`https://sharcade.herokuapp.com/sharcade_api`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .catch((error) => console.log(error));
    }
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
