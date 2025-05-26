// define HTML elements
const board = document.getElementById('game-board');

// define game variables
gridSize = 20;
let direction = 'right';
let snake = [{ x: 10, y: 10}];
let food = generateFood();

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

    snake.pop();
}

//Test moving
setInterval(()=>{
    move(); // Move first
    draw(); // then draw again new position
}, 200);