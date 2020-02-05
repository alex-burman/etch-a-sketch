let generateGrid = function(gridSize, gridId, rowClass, rowMemberClass) {
    const grid = document.createElement('div');
    grid.id = `${gridId}`;
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.className = `${rowClass}`;
        for (let j = 0; j < gridSize; j++) {
            let rowMember = document.createElement('div');
            rowMember.className = `${rowMemberClass}`;
            rowMember.style.backgroundColor = 'black';
            rowMember.style.display = 'inline-block';
            rowMember.style.width = '10px';
            rowMember.style.height = '10px';
            row.appendChild(rowMember);
        }
        grid.appendChild(row);
    }

    return grid;
}

document.querySelector('body').appendChild(generateGrid(4, 'grid', 'row', 'rowMember'));