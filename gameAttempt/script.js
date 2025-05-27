window.addEventListener('load', function(){
    showLoadingScreen();
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1280 / 2;
    canvas.height = 720 / 2;

    const menuScreen = document.getElementById('menu-screen');
    const gameContainer = document.getElementById('game-container');

    function hideAllScreens() {
        const screens = document.querySelectorAll('.screen');
        screens.forEach(screen => screen.style.display = 'none');
    }

    function showLoadingScreen() {
        hideAllScreens();
        document.getElementById('loading-screen').style.display = 'flex';
    }

    function switchToMenu() {
        hideAllScreens();
        document.getElementById('menu-screen').style.display = 'flex';
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
    function addAppToMenu(name, onClick) {
        const app = createGameElement('div', 'app', name);
        app.addEventListener('click', onClick);
        menuScreen.appendChild(app);
    }
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
    addAppToMenu('Snake', openSnakeGame);

    // You can add canvas animation code here later
});