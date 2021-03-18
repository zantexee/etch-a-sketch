const className = "grid-item";
const gridContainer = document.querySelector(".grid-container");

//Generates random RGBa string.
const randomRgbaString = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  let a = Math.random() * 1;

  return `rgba(${r}, ${g}, ${b}, ${a})`;
};

//Changes color of hovered item's background
const changeItemBg = (item) =>
  (item.style.backgroundColor = randomRgbaString());

//Fill grid container.
const fillGridContainer = (squaresPerSide) => {
  let gridSize = squaresPerSide ? squaresPerSide : 16;
  gridContainer.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr);`;

  for (let i = 0; i < gridSize * gridSize; i++) {
    let gridItem = document.createElement("div");

    gridItem.onmouseover = () => changeItemBg(gridItem);

    gridItem.className = className;
    gridContainer.appendChild(gridItem);
  }
};

fillGridContainer(4);
