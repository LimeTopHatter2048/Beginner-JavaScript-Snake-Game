window.addEventListener('load', function(){
    showLoadingScreen();
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1280 / 2;
    canvas.height = 720 / 2;

    const menuScreen = document.getElementById('menu-screen');
    const gameContainer = document.getElementById('game-container');

    // define game variables
    let apps = [{ name: 'Snake', x: 4, y: 1 }];

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
        document.getElementById('menu-screen').style.display = 'grid';
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
        //element.style.position = 'relative'; // stays in grid flow
        return element;
    }
    //
    function drawApps() {
        // Clear existing apps to avoid duplicates
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