const generateGrid = function (
    gridItemQuantity,
    gridId,
    gridItemClass,
    gridDimensions
) {
    const grid = document.createElement('div');

    grid.id = `${gridId}`;
    grid.style.width = `${gridDimensions}px`;
    grid.style.height = `${gridDimensions}px`;
    grid.style.setProperty('--grid-cols', gridItemQuantity);
    grid.style.setProperty('--grid-rows', gridItemQuantity);

    const gridResolution = gridItemQuantity * gridItemQuantity;

    for (let i = 0; i < gridResolution; i++) {
        let gridItem = document.createElement('div');
        gridItem.classList = gridItemClass;
        gridItem.style.backgroundColor = 'white';
        grid.appendChild(gridItem);
    }
    console.log(grid);
    return grid;
}

document.querySelector('body').appendChild(
    generateGrid(16, 'grid', 'grid-item', 500)
);

const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((item) => {
    item.style.backgroundColor = 'white';
    item.addEventListener('mouseover', () => 
        item.style.setProperty('background-color', '#222')
    );
});