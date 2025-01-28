let score = 0;
let gameInterval;
const ball = document.getElementById("ball");
const scoreDisplay = document.getElementById("score");
const startButton = document.getElementById("start-button");

function getRandomPosition(containerSize, ballSize) {
    const maxPosition = containerSize - ballSize;
    const randomPosition = Math.floor(Math.random() * maxPosition);
    return randomPosition;
}

function moveBall() {
    const container = document.getElementById("game-container");
    const x = getRandomPosition(container.offsetWidth, ball.offsetWidth);
    const y = getRandomPosition(container.offsetHeight, ball.offsetHeight);
    ball.style.left = `${x}px`;
    ball.style.top = `${y}px`;
}

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    ball.style.display = "block";
    startButton.disabled = true;

    gameInterval = setInterval(() => {
        moveBall();
    }, 10000);

    setTimeout(() => {
        clearInterval(gameInterval);
        ball.style.display = "none";
        startButton.disabled = false;
        alert(`เกมจบแล้ว! คุณได้คะแนน: ${score}`);
    }, 30000);
}

ball.addEventListener("click", () => {
    score++;
    scoreDisplay.textContent = score;
    moveBall();
});

startButton.addEventListener("click", startGame);
