function gridSize() {
    let size = prompt("Enter number of squares per side (max 100):");
    size = parseInt(size);

    if (isNaN(size) || size < 1 || size > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    const container = document.getElementById("gridContainer");
    container.innerHTML = ""; // Clear existing grid

    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const totalCells = size * size;
    for (let i = 0; i < totalCells; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";

        // Change to random color on first hover
        cell.addEventListener("mouseenter", () => {
            if (!cell.dataset.colored) {
                const r = Math.floor(Math.random() * 256);
                const g = Math.floor(Math.random() * 256);
                const b = Math.floor(Math.random() * 256);
                cell.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
                cell.dataset.colored = "true";
            }
        });

        container.appendChild(cell);
    }
}
