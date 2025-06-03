export class Snake {
    constructor() {
        this.body = [{ x: 10, y: 10 }];
    }

    move(direction) {
        const head = { ...this.body[0] };
        switch (direction) {
            case 'up': head.y--; break;
            case 'down': head.y++; break;
            case 'left': head.x--; break;
            case 'right': head.x++; break;
        }
        this.body.unshift(head);
        this.body.pop();
    }

    draw(board) {
        this.body.forEach(segment => {
            const el = document.createElement('div');
            el.className = 'snake';
            el.style.gridColumn = segment.x;
            el.style.gridRow = segment.y;
            board.appendChild(el);
        });
    }

    eat(foodPos) {
        const head = this.body[0];
        if (head.x === foodPos.x && head.y === foodPos.y) {
            this.body.push({ ...this.body[this.body.length - 1] });
            return true;
        }
        return false;
    }

    checkCollision(gridSize) {
        const [head, ...body] = this.body;
        const outOfBounds = head.x < 1 || head.x > gridSize || head.y < 1 || head.y > gridSize;
        const selfCollision = body.some(seg => seg.x === head.x && seg.y === head.y);
        return outOfBounds || selfCollision;
    }

    canChangeTo(newDirection) {
        const opposite = {
            up: 'down',
            down: 'up',
            left: 'right',
            right: 'left'
        };
        return newDirection !== opposite[this.direction];
    }

    reset() {
        this.body = [{ x: 10, y: 10 }];
    }
}