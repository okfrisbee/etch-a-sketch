function createGrid(size) {
    const numOfCells = size * size;
    const container = document.querySelector(".container");
    const width = parseInt(getComputedStyle(container).width)/size;
    for (let i = 0; i < numOfCells; i++) {
        const cell = document.createElement("div");
        cell.classList.toggle("cell");
        cell.style.width = width + "px";
        cell.style.height = width + "px";
        container.appendChild(cell);
    }
}

createGrid(16);