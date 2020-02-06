const generateGridItem = function () {
    let gridItem = document.createElement('div');

    gridItem.classList = 'grid-item';
    gridItem.style.backgroundColor = 'white';
    gridItem.addEventListener('mouseover', () => 
        gridItem.style.setProperty('background-color', '#222')
    );
    return gridItem;
}

const generateGrid = function (gridItemQuantity) {
    const grid = document.createElement('div');
    const gridResolution = gridItemQuantity * gridItemQuantity;

    grid.id = 'grid';
    grid.style.setProperty('--grid-cols', gridItemQuantity);
    grid.style.setProperty('--grid-rows', gridItemQuantity);

    for (let i = 0; i < gridResolution; i++) {
        grid.appendChild(generateGridItem());
    }

    return grid;
}

document.querySelector('#btn-reset').addEventListener('click', () => {
    let newGridNumber = NaN;
    while (isNaN(newGridNumber) == true) {
        newGridNumber = prompt('Enter Squares Per Side (max number = 100)');
        newGridNumber = Number.parseInt(newGridNumber);
    }

    if (newGridNumber > 100) {
        newGridNumber = 100;
    } else if (newGridNumber < 1) {
        newGridNumber = 1;
    }

    const newGrid = generateGrid(newGridNumber);
    document.getElementById('grid').remove();
    document.querySelector('body').appendChild(newGrid);
});

const newGrid = generateGrid(16);
document.querySelector('body').appendChild(newGrid);