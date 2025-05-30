import { SnakeApp } from './gameApp_snake.js';

window.addEventListener('load', function(){
    showLoadingScreen();
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1280 / 2;
    canvas.height = 720 / 2;

    const menuScreen = document.getElementById('menu-screen');

    // define game variables
    let snakeApp;

    function hideAllScreens() {
        // make current screens disappear
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => screen.style.display = 'none');
    }

    function showLoadingScreen() {
        hideAllScreens();
        document.getElementById('loading-screen').style.display = 'flex';
    }

    function switchToMenu() {
        hideAllScreens();
        document.getElementById('menu-screen').style.display = 'grid';
    }

    function openSnakeGame() {
        console.log("Opening Snake Game");
        hideAllScreens();

        // Create game console container if it doesn't exist
        let gameContainer = document.getElementById('game-container');
        if (!gameContainer) {
            gameContainer = document.createElement('div');
            gameContainer.id = 'game-container';
            gameContainer.className = 'screen';
            
            // ✅ Append it to the .screen-container
            const screenContainer = document.querySelector('.screen-container');
            screenContainer.appendChild(gameContainer);
        }
        // Clear any old content
        gameContainer.innerHTML = '';

        // Initialize SnakeApp and append its content
        snakeApp = new SnakeApp();
        const snakeScreen = snakeApp.getHTML();
        gameContainer.appendChild(snakeScreen);
        gameContainer.style.display = 'flex';
        snakeApp.start();
    }

    // Create a snake of food cube/div
    function createGameElement(tag,className, textContent){
        const element = document.createElement(tag);
        element.className = className;
        element.textContent = textContent;
        return element;
    }
    //
    function drawApps() {
        // Clear existing apps to avoid duplicates
        const apps = [{ name: 'Snake', x: 4, y: 1 }];
        const oldApps = menuScreen.querySelectorAll('.app');
        oldApps.forEach(app => app.remove());

        apps.forEach((appData) => {
            const appElement = createGameElement('div', 'app', appData.name);
            setPosition(appElement, appData);
            appElement.addEventListener('click', () => {
                if (appData.name === 'Snake') openSnakeGame();
            });
            menuScreen.appendChild(appElement);
        });
    }
    //
    // Option 1: Dummy placeholder
    function initializeGame() {
        console.log("Game initialized");
    }

    // Simulate loading delay (or wrap async initialization here)
    setTimeout(() => {
        try {
            initializeGame(); // Placeholder for any setup or error handling
            switchToMenu();
        } catch (error) {
            console.error("Loading Error:", error);
            alert("Something went wrong. Please reload.");
        }
    }, 1000);

    // Add the Snake Game app
    drawApps();

    // You can add canvas animation code here later

    //set the position of snake or food
    function setPosition(element, position){
        element.style.gridColumn = position.x;
        element.style.gridRow = position.y;
    }
});