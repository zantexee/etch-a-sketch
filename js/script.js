const GRID_SIZE = 16 * 16;
const CLASS_NAME = "grid-item";

const gridContainer = document.querySelector(".grid-container");

for (let i = 0; i < GRID_SIZE; i++) {
  let gridItem = document.createElement("div");
  gridItem.className = CLASS_NAME;
  gridContainer.appendChild(gridItem);
}
