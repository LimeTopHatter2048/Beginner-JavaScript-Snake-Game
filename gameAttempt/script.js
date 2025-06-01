import { SnakeApp } from './gameApp_snake.js';

window.addEventListener('load', function(){
    showLoadingScreen();
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1280 / 2;
    canvas.height = 720 / 2;

    const screenContainer = document.querySelector('.screen-container');
    const menuScreen = document.getElementById('menu-screen');
    const activeApps = [];

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

        let gameContainer = document.getElementById('game-console');

        // If it doesn't exist, create it and initialize
        if (!gameContainer) {
            gameContainer = document.createElement('div');
            gameContainer.id = 'game-console';
            gameContainer.className = 'screen';
            
            // ✅ Initialize SnakeApp and append its content
            snakeApp = new SnakeApp();
            const snakeScreen = snakeApp.getHTML(); // already includes full innerHTML
            gameContainer.appendChild(snakeScreen);
            screenContainer.appendChild(gameContainer);
            activeApps.push({ id: 'game-console', name: 'Snake' });

            snakeApp.start();
        }

        gameContainer.style.display = 'flex';
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

    // Home Button (🔳) — go to menu but keep apps active
    const homeButton = document.getElementById('home-button');
    homeButton.addEventListener('click', () => {
        console.log("Returning to home screen...");
        hideAllScreens();
        document.getElementById('menu-screen').style.display = 'grid';
    });
    // Back Button (⬅️) — for in-app logic (optional for now)
    const backButton = document.getElementById('back-button');
    backButton.addEventListener('click', () => {
        console.log("Back button clicked");
        // Add in-app logic later if needed
    });
    //Task View Button (☰) — show open apps (third perspective)
    const taskViewButton = document.getElementById('task-view-button');
    taskViewButton.addEventListener('click', () => {
        console.log("Task view opened");
        hideAllScreens();

        const taskViewScreen = document.getElementById('task-view-screen');
        if (!taskViewScreen) {
            const screen = document.createElement('div');
            screen.id = 'task-view-screen';
            screen.className = 'screen';
            screen.style.display = 'grid';
            screen.innerHTML = '<h2>Open Apps</h2>';
            activeApps.forEach(app => {
                const appBtn = document.createElement('button');
                appBtn.textContent = app.name;
                appBtn.onclick = () => {
                    hideAllScreens();
                    document.getElementById(app.id).style.display = 'flex';
                };
                screen.appendChild(appBtn);
            });
            screenContainer.appendChild(screen);
        } else {
            taskViewScreen.style.display = 'grid';
        }
    });

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