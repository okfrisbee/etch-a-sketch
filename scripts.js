function createGrid(size) {
    const numOfCells = size * size;
    const width = parseInt(getComputedStyle(container).width)/size;
    for (let i = 0; i < numOfCells; i++) {
        const cell = document.createElement("div");
        cell.style.border = "1px solid";
        cell.style.width = width + "px";
        cell.style.height = width + "px";
        cell.style.opacity = 0;
        container.appendChild(cell);
    }
}

function getRandomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let size = +prompt("Enter the number of squares per side for the new grid (1-100).");
    while (size < 1 || size > 100) {
        size = +prompt("Invalid number. Choose a number between 1-100.");
    }
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    createGrid(size);
});

const container = document.querySelector(".container");
container.addEventListener("mouseover", (e) => {
    const targetCell = e.target;
    let currentOpacity = parseFloat(getComputedStyle(targetCell).opacity);
    targetCell.style.opacity = currentOpacity + 0.1;
    targetCell.style.background = getRandomColor();
});

createGrid(16);