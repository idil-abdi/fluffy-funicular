// select start button from html
const startGameBtn = document.getElementById('start-game-btn');

// create a function to removed start button once clicked. 
const handleStartBtn = () => {
    const startGameContainer = document.getElementById('start-game-container');
    startGameContainer.remove();

    renderGameContainer();
};

// setting up html element on javascript.
const renderGameContainer = () => {
    const htmlDiv = document.getElementById('box');

    const titleDiv = document.createElement('h1');
    titleDiv.textContent = 'Find Stitch';
    titleDiv.setAttribute('class', 'header');

    const mainContainerDiv = document.createElement('div');
    mainContainerDiv.setAttribute('class', 'main-container');

    const mainGameDiv = constructGame(3)

    const scoreDiv = document.createElement('div');
    scoreDiv.textContent = 'Score';
    
    const restartBtn = document.createElement('button');
    restartBtn.setAttribute('class', 'btn');
    restartBtn.textContent = 'restart';
    restartBtn.addEventListener('click', handleRestartBtn);


    mainContainerDiv.append(...[titleDiv, mainGameDiv, scoreDiv, restartBtn]);

    htmlDiv.append(mainContainerDiv);

};

const constructGame = (length) => {
    const mainGameDiv = document.createElement('div');
    mainGameDiv.setAttribute('class', 'main-game-container');

    const stitchLocation = getRandomCell(length);

    for (let row = 0; row < length; row++) {
        const rowDiv = document.createElement('div');
        rowDiv.setAttribute('class', 'row');

        for (let col = 0; col < 3; col++) {
            const colDiv =document.createElement('div');
            colDiv.setAttribute('class', 'col');

            for(let card = 0; card < 1; card++ ) {
                const cardDiv = document.createElement('div');
                cardDiv.setAttribute('class', 'flip-card');

                for(let i = 0; i < 1; i++) {
                    const innerDiv = document.createElement('div');
                    innerDiv.setAttribute('class', 'inner');

                    for(let sub = 0; sub < 1; sub++) {
                        const frontDiv = document.createElement('div');
                        frontDiv.setAttribute('class', 'front');
                        frontDiv.setAttribute("data-row", row);
                        frontDiv.setAttribute("data-col", col);
                        frontDiv.textContent = '?';
                        const backDiv = document.createElement('div');
                        backDiv.setAttribute('class', 'back');

                        innerDiv.append(...[frontDiv, backDiv]);
                    }

                    cardDiv.append(innerDiv);
                };

                colDiv.append(cardDiv);
            };

            rowDiv.append(colDiv);
        };

        mainGameDiv.append(rowDiv);
    };

    mainGameDiv.addEventListener('click', (event) => {
        handleCellClick(event, stitchLocation);
    });

    return mainGameDiv;

};

const handleCellClick = (event, stitchLocation) => {
    const target = event.target;
    const selectedRow = +target.getAttribute("data-row");
    const selectedCol = +target.getAttribute("data-col");

    if (selectedRow === stitchLocation.row && selectedCol === stitchLocation.col) {
        console.log('FOUND STITCH');
    } else {
        console.log("BOO");
    }
};

const getRandomCell = (length) => {
    return {
        row: Math.floor(Math.random() * length),
        col: Math.floor(Math.random() * length),
    };
};

const handleRestartBtn = () => {
    window.location.reload();
};

startGameBtn.addEventListener('click', handleStartBtn);
