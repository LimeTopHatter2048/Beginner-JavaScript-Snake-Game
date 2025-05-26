import {  } from './.js';

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1280 / 2;
    canvas.height = 720 / 2;

    const menuScreen = document.getElementById('menu-screen');
    const gameContainer = document.getElementById('game-container');

    function addAppToMenu(name, onClick) {
        const app = createGameElement('div', 'app', name);
        app.addEventListener('click', onClick);
        menuScreen.appendChild(app);
    }
    function drawScene(name, onClick) {
        const app = createGameElement('div', 'app', name);
        app.addEventListener('click', onClick);
        menuScreen.appendChild(app);
    }

    function openSnakeGame() {
        menuScreen.style.display = 'none';
        gameContainer.style.display = 'flex';
        // You can initialize the snake game here later
    }

    // Create a snake of food cube/div
    function createGameElement(tag,className, textContent){
        const element = document.createElement(tag);
        element.className = className;
        element.textContent = textContent;
        return element;
    }

    // Add the Snake Game app
    addAppToMenu('Snake', openSnakeGame);

    // You can add canvas animation code here later
});