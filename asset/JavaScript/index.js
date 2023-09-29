const startGameBtn = document.getElementById('start-game-btn');

const handleCellClick = (event, bunnyLocation) => {
    const target = event.target;
    const selectedRow = +target.getAttribute("data-row");
    const selectedCol = +target.getAttribute("data-col");

    if (selectedRow === bunnyLocation.row && selectedCol === bunnyLocation.col) {
        console.log("HURRAY");
    } else {
        console.log("BOO");
    }
};

const getRandomCell =(length) => {
    return {
        row: Math.floor(Math.random() * length),
        col: Math.floor(Math.random() * length),
    };
};

const constructGame = (length) => {
    const mainGameDiv = document.createElement('div');
    mainGameDiv.setAttribute('class', 'main-game-container');

    const bunnyLocation = getRandomCell(length);

    for (let row = 0; row < length; row++) {
        const rowDiv =document.createElement('div');
        rowDiv.setAttribute('class', 'row');

        for (let col = 0; col < 3; col++) {
            const colDiv =document.createElement('div');
            colDiv.setAttribute('class', 'col');
            colDiv.setAttribute("data-row", row);
            colDiv.setAttribute("data-col", col);
            colDiv.textContent = '?'
            rowDiv.append(colDiv);
        };

        mainGameDiv.append(rowDiv);
    };

    mainGameDiv.addEventListener('click', (event) => {
        handleCellClick(event, bunnyLocation);
    });

    return mainGameDiv;

};

const renderGameContainer = () => {
    const htmlDiv = document.getElementById('box');

    const mainContainerDiv = document.createElement('div');
    mainContainerDiv.setAttribute('class', 'main-container');

    const mainGameDiv = constructGame(3)

    const scoreDiv = document.createElement('div');
    scoreDiv.textContent = 'Score';
    
    const restartBtn = document.createElement('button');
    restartBtn.setAttribute('class', 'btn');
    restartBtn.textContent = 'restart';
    restartBtn.addEventListener('click', handleRestartBtn);


    mainContainerDiv.append(...[mainGameDiv, scoreDiv, restartBtn]);

    htmlDiv.append(mainContainerDiv);

};

const handleRestartBtn = () => {
    window.location.reload();
};

const handleStartBtn = () => {
    const startGameContainer = document.getElementById('start-game-container');
    startGameContainer.remove();

    renderGameContainer();
};

startGameBtn.addEventListener('click', handleStartBtn);

