function createGrid(size) {
    const numOfCells = size * size;
    const container = document.querySelector(".container");
    for (let i = 0; i < numOfCells; i++) {
        const cell = document.createElement("div");
        container.appendChild(cell);
    }
}

createGrid(16);