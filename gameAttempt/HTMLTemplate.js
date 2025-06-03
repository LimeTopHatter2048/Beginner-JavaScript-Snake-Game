export function getSnakeHTML() {
    return `
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