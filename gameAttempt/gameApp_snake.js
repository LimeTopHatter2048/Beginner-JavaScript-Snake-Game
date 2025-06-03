import { getSnakeHTML } from './HTMLTemplate.js';
import { GameEngine } from './GameEngine.js';

export class SnakeApp {
    constructor() {
        console.log("SnakeApp initialized!");
        this.wrapper = document.createElement('div');
        this.wrapper.className = 'snake-app-inner'; // changed from 'screen'
        this.wrapper.id = 'snake-wrapper'; // NEW: avoid ID conflict

        this.wrapper.innerHTML = getSnakeHTML();

        this.engine = new GameEngine(this.wrapper);
    }

    getHTML() {
        return this.wrapper;
    }

    start() {
        console.log("Game started!");
        this.engine.renderInitialScreen();
    }
}