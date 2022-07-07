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
        gridItem.addEventListener('click', addColor);
        gridItem.classList.add('grid-item');
        grid.appendChild(gridItem);
    }
}

setupGrid(16);

function addColor () {
    this.style.backgroundColor = "green"
}
/**
 * 1. Create empty div in HTML
 * 2. Create new element in memory 
 * 3. Color the empty div on color
 */
