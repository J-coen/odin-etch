// DOM elements
const container = document.getElementById('container');
const changeGridBtn = document.getElementById('change-grid-btn');

// Grid array
let gridArr = [];

// Initial number
let squaresInGrid = 16;

// Make grid function
function makeGrid() {
    // Create each div box and push them to array
    for(let i = 1; i <= squaresInGrid * squaresInGrid; i++) {
        gridArr.push(document.createElement('div'));
    }

    // Update grid rows and columns
    container.style.gridTemplateRows = `repeat(${squaresInGrid}, 1fr)`;
    container.style.gridTemplateColumns = `repeat(${squaresInGrid}, 1fr)`;
    // Append each div to container
    gridArr.forEach(div => container.appendChild(div));

    // Call add event listener and show class
    addClassToEach();
}

// Make initial grid
makeGrid();

// Change grid with user input function
function changeGrid() {
    clearGridDrawing();

    const userInput = prompt('Please enter grid size (64 max)');
    // Call update grid and pass user input
    updateGrid(userInput);
}

// Clear all existing divs
function clearGridDrawing() {
    // Clear container
    container.innerHTML = '';
    // Clear array
    gridArr = [];
    // Make grid again
    makeGrid();
}

// Update grid
function updateGrid(userInput) {
    // Convert user input from string to number
    const inputToNum = parseInt(userInput);
    // Check input is a number and below 64
    if(isNaN(inputToNum) !== false || inputToNum <= 64 || inputToNum > 0) {
        // Update square in grid to user input number
        squaresInGrid = inputToNum;
        makeGrid();
    } else {
        // if number is over 64 just make standard grid
        makeGrid();
    }
}

// Add event listener and class to each grid div when it is made
function addClassToEach() {
    gridArr.forEach(div => div.addEventListener('mouseover', () => {
        div.classList.add('show');
     })
    )
}

// Button event listener
changeGridBtn.addEventListener('click', changeGrid);