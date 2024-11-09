// Select the canvas element
const canvas = document.getElementById('pongCanvas');
const context = canvas.getContext('2d');

// Define the paddle properties
const paddleWidth = 10;
const paddleHeight = 100;
const paddleSpeed = 5;

// Player paddle
const player = {
  x: 0,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  color: 'white',
  dy: 0
};

// Computer paddle
const computer = {
  x: canvas.width - paddleWidth,
  y: canvas.height / 2 - paddleHeight / 2,
  width: paddleWidth,
  height: paddleHeight,
  color: 'white',
  dy: 4
};

// Ball properties
const ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  radius: 7,
  speed: 4,
  dx: 4,
  dy: 4,
  color: 'white'
};

// Draw a rectangle (paddle)
function drawRect(x, y, w, h, color) {
  context.fillStyle = color;
  context.fillRect(x, y, w, h);
}

// Draw a circle (ball)
function drawCircle(x, y, r, color) {
  context.fillStyle = color;
  context.beginPath();
  context.arc(x, y, r, 0, Math.PI * 2, false);
  context.closePath();
  context.fill();
}

// Draw the net
function drawNet() {
  context.fillStyle = 'white';
  context.fillRect(canvas.width / 2 - 1, 0, 2, canvas.height);
}

// Draw the game elements
function draw() {
  // Clear the canvas
  context.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the net
  drawNet();

  // Draw player and computer paddles
  drawRect(player.x, player.y, player.width, player.height, player.color);
  drawRect(computer.x, computer.y, computer.width, computer.height, computer.color);

  // Draw the ball
  drawCircle(ball.x, ball.y, ball.radius, ball.color);
}

// Update the game state
function update() {
  // Move the player paddle
  player.y += player.dy;

  // Prevent the player paddle from going out of bounds
  if (player.y < 0) {
    player.y = 0;
  } else if (player.y + player.height > canvas.height) {
    player.y = canvas.height - player.height;
  }

  // Move the ball
  ball.x += ball.dx;
  ball.y += ball.dy;

  // Ball collision with top and bottom walls
  if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
    ball.dy *= -1;
  }

  // Ball collision with player paddle
  if (
    ball.x - ball.radius < player.x + player.width &&
    ball.y > player.y &&
    ball.y < player.y + player.height
  ) {
    ball.dx *= -1;
  }

  // Ball collision with computer paddle
  if (
    ball.x + ball.radius > computer.x &&
    ball.y > computer.y &&
    ball.y < computer.y + computer.height
  ) {
    ball.dx *= -1;
  }

  // Move the computer paddle
  if (ball.y < computer.y + computer.height / 2) {
    computer.y -= computer.dy;
  } else {
    computer.y += computer.dy;
  }

  // Prevent the computer paddle from going out of bounds
  if (computer.y < 0) {
    computer.y = 0;
  } else if (computer.y + computer.height > canvas.height) {
    computer.y = canvas.height - computer.height;
  }
}

// Game loop
function gameLoop() {
  update();
  draw();
  requestAnimationFrame(gameLoop);
}

// Event listeners for player paddle movement
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowUp') {
    player.dy = -paddleSpeed;
  } else if (e.key === 'ArrowDown') {
    player.dy = paddleSpeed;
  }
});

document.addEventListener('keyup', (e) => {
  if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
    player.dy = 0;
  }
});

// Start the game
gameLoop();
