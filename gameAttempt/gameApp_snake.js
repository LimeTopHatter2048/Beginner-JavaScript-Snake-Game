export class SnakeApp {
    constructor() {
        console.log("SnakeApp initialized!");
        this.wrapper = document.createElement('div');
        this.wrapper.className = 'snake-app-inner'; // changed from 'screen'
        this.wrapper.id = 'snake-wrapper'; // NEW: avoid ID conflict

        this.wrapper.innerHTML = `
            <div>
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
            <img id="logo" src="img/snake-game-ai-gen.png" alt="snake-logo">
        `;
    }

    getHTML() {
        return this.wrapper;
    }

    start() {
        console.log("Game started!");
        const instructionText = this.wrapper.querySelector('#instruction-text');
        if (instructionText) instructionText.textContent = "Game in Progress...";
    }
}