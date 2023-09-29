const startGameBtn = document.getElementById('start-game-btn');

const constructGame = (length) => {
    const mainGameDiv = document.createElement('div');
    mainGameDiv.setAttribute('class', 'main-game-container');

    for (let row = 0; row < length; row++) {
        const rowDiv =document.createElement('div');
        rowDiv.setAttribute('class', 'row');

        for (let col = 0; col < 3; col++) {
            const colDiv =document.createElement('div');
            colDiv.setAttribute('class', 'col');
            colDiv.textContent = '?'
            rowDiv.append(colDiv);
        }

        mainGameDiv.append(rowDiv)
    }

    return mainGameDiv

}

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

