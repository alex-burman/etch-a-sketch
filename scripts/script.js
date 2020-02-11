const getCheckedRadio = function (name) {
    const radio = document.getElementsByName(name);
    let checked;
    radio.forEach((el) => {
        if (el.checked) checked = el;
    });

    return checked;
}

const getRandomColor = function () {
    let color = '';
    for (let i = 0; i < 3; i++) {
        let randomNumber = Math.floor(Math.random() * 255);
        color += `${randomNumber}, `
    }
    return color;
}

const getTransparency = function (e) {
    let colorProperty = e.target.style.backgroundColor;
    let transparencyProperty = colorProperty.substring(
        13,
        colorProperty.length - 1
    );
    let currentTransparency = parseFloat(transparencyProperty);
    return (
        currentTransparency < 1
        ? currentTransparency + 0.1
        : 1
    );
}

const fillGridItem = function (e) {
    let radioSelection = getCheckedRadio('fill');
    switch (radioSelection.value) {
        case 'black':
            e.target.style.setProperty('background-color', 'rgba(0, 0, 0, 1)');
            break;
        case 'color':
            const randomColor = getRandomColor();
            e.target.style.setProperty('background-color', `rgba(${randomColor}1)`);
            break;
        case 'fade':
            const transparency = getTransparency(e);
            e.target.style.setProperty(
                'background-color', `rgba(0,0,0,${transparency})`
            );
            break;
    }
}

const generateGridItem = function () {
    let gridItem = document.createElement('div');

    gridItem.classList = 'grid-item';
    gridItem.style.backgroundColor = 'rgba(0, 0, 0, 0.0)';
    return gridItem;
}

const generateGrid = function (gridItemQuantity) {
    const grid = document.createElement('div');
    const gridResolution = gridItemQuantity * gridItemQuantity;

    grid.id = 'grid';
    grid.style.setProperty('--grid-cols', gridItemQuantity);
    grid.style.setProperty('--grid-rows', gridItemQuantity);
    grid.addEventListener('mouseover', (e) => {
        if (e.target.classList.value != 'grid-item') {
            return;
        }
        fillGridItem(e);
    });

    const childFragment = document.createDocumentFragment();
    for (let i = 0; i < gridResolution; i++) {
        childFragment.appendChild(generateGridItem());
    }
    grid.appendChild(childFragment);

    return grid;
}

document.querySelector('#btn-reset').addEventListener('mouseup', () => {
    let newGridNumber = NaN;
    while (isNaN(newGridNumber) == true) {
        newGridNumber = prompt('Enter Squares Per Side (max number = 100)');
        if (newGridNumber == null) {
            return;
        } else {
            newGridNumber = Number.parseInt(newGridNumber);
        }
    }

    if (newGridNumber > 100) {
        newGridNumber = 100;
    } else if (newGridNumber < 1) {
        newGridNumber = 1;
    }

    const newGrid = generateGrid(newGridNumber);
    document.getElementById('grid').remove();
    document.querySelector('#sketch-grid-container').appendChild(newGrid);
});

const newGrid = generateGrid(16);
document.querySelector('#sketch-grid-container').appendChild(newGrid);