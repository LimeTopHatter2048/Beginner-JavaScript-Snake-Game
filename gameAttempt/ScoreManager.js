export class ScoreManager {
    constructor(scoreEl, highScoreEl) {
        this.scoreEl = scoreEl;
        this.highScoreEl = highScoreEl;
        this.score = 0;
        this.highScore = 0;
    }

    increase() {
        this.score++;
        this.scoreEl.textContent = this.score.toString().padStart(3, '0');
    }

    reset() {
        if (this.score > this.highScore) {
            this.highScore = this.score;
            this.highScoreEl.textContent = this.highScore.toString().padStart(3, '0');
        }
        this.score = 0;
        this.scoreEl.textContent = '000';
    }
}