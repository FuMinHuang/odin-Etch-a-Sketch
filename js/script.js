const container = document.querySelector("#container");

// Create a grid of square divs
function createGrid(numSquare) {
    for (let i = 0; i < numSquare; i++) {
        const row = container.appendChild(document.createElement("div"));
        row.className = "row";
        for (let j = 0; j < numSquare; j++) {
            const square = document.createElement("div");
            square.className = "square";
            row.appendChild(square);

            // Hover effect 
            square.addEventListener(
                "mouseenter",
                (event) => {
                    // highlight the mouseenter target
                    event.target.style.backgroundColor = "aqua";

                    //reset the color after a short delay
                    setTimeout(() => {
                        event.target.style.backgroundColor = "";                        
                    }, 500);
                }
            )
        }       
    }    
}

// Create a basic 16 x 16 grid
createGrid(16);

// Asking squares per side input
let squaresInput = 0;
const gridsButton = document.querySelector(".grids");
gridsButton.addEventListener("click", () => {
    // Remove the existing grid
    const container = document.querySelector("#container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    // Asking for the number of squares per side for the new grid
    squaresInput = prompt("How many squares per side for the new grid?", );
    createGrid(squaresInput);});