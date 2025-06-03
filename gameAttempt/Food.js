export class Food {
    constructor() {
        this.position = { x: 5, y: 5 };
    }

    respawn(gridSize, snakeBody) {
        let newPos;
        do {
            newPos = {
                x: Math.floor(Math.random() * gridSize) + 1,
                y: Math.floor(Math.random() * gridSize) + 1
            };
        } while (snakeBody.some(segment => segment.x === newPos.x && segment.y === newPos.y));
        this.position = newPos;
    }

    draw(board) {
        const el = document.createElement('div');
        el.className = 'food';
        el.style.gridColumn = this.position.x;
        el.style.gridRow = this.position.y;
        board.appendChild(el);
    }
}