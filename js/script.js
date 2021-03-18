//Set file constants
const className = "grid-item";
const gridContainer = document.querySelector(".grid-container");

//Generates random RGBa string and returns it.
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
    //Create initial div to be inserted
    let gridItem = document.createElement("div");

    //Triggers changeItemBg function which changes the background of the div when it detects the cursor on top of the element
    gridItem.onmouseover = () => changeItemBg(gridItem);

    //Add the css class to the element and "push" it into the grid container
    gridItem.className = className;
    gridContainer.appendChild(gridItem);
  }
};

//Clears container's divs (not the background color)
const clearContainer = () => {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.lastChild);
  }
};

//Allows for user input and re-renders grid
const changeSize = () => {
  //Ask for input
  let size = parseInt(prompt("Enter the new size."));

  //Validates input
  if (isNaN(size)) {
    window.alert("Invalid input.");
    return;
  }

  clearContainer();
  //Call "render" function
  fillGridContainer(size);
};

fillGridContainer();
