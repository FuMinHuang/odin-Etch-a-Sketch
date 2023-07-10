// Create a 16x16 grid of square divs
for (i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.className = "square";
    document.querySelector(".container").appendChild(square);
}

