import { Snake } from './Snake.js';
import { Food } from './Food.js';
import { ScoreManager } from './ScoreManager.js';

export class GameEngine {
    constructor(wrapper) {
        this.board = wrapper.querySelector('#game-board');
        this.instructionText = wrapper.querySelector('#instruction-text');
        this.logo = wrapper.querySelector('#logo');
        this.scoreDisplay = wrapper.querySelector('#score');
        this.highScoreDisplay = wrapper.querySelector('#highScore');

        this.snake = new Snake();
        this.food = new Food();
        this.scoreManager = new ScoreManager(this.scoreDisplay, this.highScoreDisplay);

        this.direction = 'right';
        this.gameStarted = false;
        this.gridSize = 20;
        this.interval = null;
        this.speed = 200;

        this.handleKeyPress = this.handleKeyPress.bind(this);
        document.addEventListener('keydown', this.handleKeyPress);
    }
    renderInitialScreen(){
        this.board.innerHTML = '';
        this.instructionText.style.display = 'block';
        this.logo.style.display = 'block';
        this.instructionText.textContent = 'Press spacebar to start game';
    }

    startGame() {
        if (this.gameStarted) return; // already running
        this.gameStarted = true;
        this.instructionText.style.display = 'none';
        this.logo.style.display = 'none';

        this.interval = setInterval(() => {
            this.update();
            this.draw();
        }, this.speed);
    }

    update() {
        this.snake.move(this.direction);

        if (this.snake.checkCollision(this.gridSize)) {
            this.resetGame();
            return;
        }

        if (this.snake.eat(this.food.position)) {
            this.food.respawn(this.gridSize, this.snake.body);
            this.speedUp();
            this.scoreManager.increase();
            this.restartInterval();
        }
    }

    draw() {
        if (!this.gameStarted) {
            this.board.innerHTML = ''; // Clear board if game hasn't started
            return;
        }
        this.board.innerHTML = '';
        this.snake.draw(this.board);
        this.food.draw(this.board);
    }

    handleKeyPress(event) {
        if (!this.gameStarted && event.key === ' ') {
            this.startGame();
        } else {
            const keyMap = {
                ArrowUp: 'up',
                ArrowDown: 'down',
                ArrowLeft: 'left',
                ArrowRight: 'right'
            };
            const newDirection = keyMap[event.key];
            if (newDirection && this.snake.canChangeTo(newDirection)) {
                this.direction = newDirection;
            }
        }
    }

    speedUp() {
        if (this.speed > 50) this.speed -= 10;
    }

    restartInterval() {
        clearInterval(this.interval);
        this.interval = setInterval(() => {
            this.update();
            this.draw();
        }, this.speed);
    }

    resetGame() {
        clearInterval(this.interval);
        this.gameStarted = false;

        this.scoreManager.reset();
        this.snake.reset();
        this.food.respawn(this.gridSize, this.snake.body); // Optional: prep next round

        this.direction = 'right';
        this.speed = 200;

        this.board.innerHTML = ''; // 🧹 Clear board visuals
        this.instructionText.style.display = 'block';
        this.instructionText.textContent = 'Press spacebar to play again';
        this.logo.style.display = 'block';
    }
}