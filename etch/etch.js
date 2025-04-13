const container = document.getElementById("container");
const resizeButton = document.getElementById("resize-btn");
const rainbowButton = document.getElementById("rainbow-btn");

let rainbowMode = false;

function createGrid(size) {
  container.innerHTML = "";
  const squareSize = 960 / size;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.classList.add("grid-square");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    square.addEventListener("mouseenter", () => {
      if (rainbowMode) {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        square.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      } else {
        square.classList.add("hovered");
      }
    });

    container.appendChild(square);
  }
}

resizeButton.addEventListener("click", () => {
  const input = prompt("Enter grid size (max 100):");
  const size = parseInt(input);
  if (!isNaN(size) && size > 0 && size <= 100) {
    createGrid(size);
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

rainbowButton.addEventListener("click", () => {
  rainbowMode = !rainbowMode;
  rainbowButton.textContent = `Rainbow: ${rainbowMode ? "ON" : "OFF"}`;
});

createGrid(16);
