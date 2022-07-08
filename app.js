const grid = document.getElementById('grid');

/**
 * Sets grid columns and rows equal to given size. 
 * Creates new elements in memory(gridItem) and adds CSS styles.
 * Inserts gridItem into grid.
 */
function setupGrid (size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size * size); i++) {
        const gridItem = document.createElement("div");
        gridItem.addEventListener('mousemove', addColor);
        gridItem.classList.add('grid-item');
        grid.appendChild(gridItem);
    }
}



function askGridSize() {  
    let gridSize = parseInt(prompt("Select grid size from 1 to 100:"));

    if (gridSize > 100) {
        alert("Too big! Please select from 1 to 100:")
        askGridSize();
    } else {  
        setupGrid(gridSize);
    }
}  

setupGrid(0);

function addColor () {
    this.style.backgroundColor = "green"
}

/**
 * Create button
 * Create prompt message asking about grid size
 * Store somehwere the grid size
 * Use the grid size on setupGrid function
 */
