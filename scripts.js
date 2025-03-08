function createGrid(size) {
    const numOfCells = size * size;
    const width = parseInt(getComputedStyle(container).width)/size;
    for (let i = 0; i < numOfCells; i++) {
        const cell = document.createElement("div");
        cell.style.border = "1px solid";
        cell.style.width = width + "px";
        cell.style.height = width + "px";
        container.appendChild(cell);
    }
}

const container = document.querySelector(".container");
container.addEventListener("mouseover", (e) => {
    const targetCell = e.target;
    targetCell.classList.add("hover");
});

createGrid(16);