export class SnakeApp {
    constructor(){
        console.log("SnakeApp initialized!");
        // create the game console wrapper
        this.gameConsole = document.createElement('div');
        this.gameConsole.id = 'game-console';
        this.gameConsole.className = 'screen';
        // Create inner game elements
        this.logo = this.createEl('div', 'logo', '🐍 Snake Game');
        this.instructionText = this.createEl('div', 'instruction-text', 'Press Space to Start');
        this.board = this.createEl('div', 'game-board', '');
        this.score = this.createEl('div', 'score', 'Score: 000');
        this.highScore = this.createEl('div', 'highScore', 'High Score: 000');

        // Append all to gameConsole
        this.gameConsole.appendChild(this.logo);
        this.gameConsole.appendChild(this.instructionText);
        this.gameConsole.appendChild(this.board);
        this.gameConsole.appendChild(this.score);
        this.gameConsole.appendChild(this.highScore);
    }
    // Create a snake of food cube/div
    createEl(tag, className, text) {
        //createGameElement
        const el = document.createElement(tag);
        el.className = className;
        el.textContent = text;
        return el;
    }
    //set the position of snake or food
    setPosition(element, position){
        element.style.gridColumn = position.x;
        element.style.gridRow = position.y;
    }
    start() {
        console.log("Game started!");
        this.instructionText.textContent = "Game in Progress...";
        // Here you’d launch your actual game logic
    }
    getElement() {
        return this.gameConsole;
    }
}

/*     <div>
        <div class="scores">
            <h1 id="score">000</h1>
            <h1 id="highScore">000</h1>
        </div>
        <div class="game-border-1">
            <div class="game-border-2">
                <div class="game-border-3">
                    <div id="game-board"></div>
                </div>
            </div>
        </div>
    </div>
    <h1 id="instruction-text">Press spacebar to start game</h1>
    <img id="logo" src="snake-game-ai-gen.png" alt="snake-logo"></img> */