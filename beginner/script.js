// define HTML elements
const board = document.getElementById('game-board');
const instructionText = document.getElementById('instruction-text');
const logo = document.getElementById('logo');

// define game variables
gridSize = 20;
gameStarted = false;
let snake = [{ x: 10, y: 10}];
let food = generateFood();
let direction = 'right';
let gameInterval;
let gameSpeedDelay= 200;

// Draw game map, snake, food
function draw(){
    board.innerHTML = '';
    drawSnake();
    drawFood();
}

// Draw snake
function drawSnake(){
    snake.forEach((segment)=> {
        const snakeElement = createGameElement('div','snake');
        setPosition(snakeElement, segment);
        board.appendChild(snakeElement);
    });
}
// Create a snake of food cube/div
function createGameElement(tag,className){
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

//set the position of snake or food
function setPosition(element, position){
    element.style.gridColumn = position.x;
    element.style.gridRow = position.y;
}

// Testing draw function
draw();

//draw food function
function drawFood(){
    const foodElement = createGameElement('div', 'food');
    setPosition(foodElement, food);
    board.appendChild(foodElement);
}

function generateFood(){
    const x = Math.floor(Math.random() * gridSize) + 1;
    const y = Math.floor(Math.random() * gridSize) + 1;
    return {x, y};
}

// Moving the snake
function move(){
    const head = {...snake[0] };
    switch (direction) {
        case 'up':
            head.y--;
            break;
        case 'down':
            head.y++;
            break;
        case 'left':
            head.x--;
            break;
        case 'right':
            head.x++;
            break;
    }
    snake.unshift(head);

    //snake.pop();
    if (head.x === food.x && head.y === food.y){
        food= generateFood();
        clearInterval(); // clear past interval
        gameInterval = setInterval(()=>{
            move(); // Move first
            //  checkCollision();
            draw(); // then draw again new position
        }, gameSpeedDelay);
    } else {
        snake.pop();
    }
}

/* //Test moving
setInterval(()=>{
    move(); // Move first
    draw(); // then draw again new position
}, 200); */

function startGame() {
    gameStarted = true; // keep track of a running game
    instructionText.style.display = 'none';
    logo.style.display = 'none';
    gameInterval = setInterval(() => {
        move();
        //  checkCollision();
        draw();
    }, gameSpeedDelay);
}

// Keypress event listener
function handlekeyPress(event){
    if (!gameStarted && event.key === ' '){
        startGame();
    } else {
        switch (event.key) {
            case 'ArrowUp':
                direction = 'up';
                break;
            case 'ArrowDown':
                direction = 'down';
                break;
            case 'ArrowLeft':
                direction = 'left';
                break;
            case 'ArrowRight':
                direction = 'right';
                break;
        }
    }
}

document.addEventListener('keydown', handlekeyPress);