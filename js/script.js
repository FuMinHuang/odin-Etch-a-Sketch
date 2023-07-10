// Create a 16x16 grid of square divs
for (i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.className = "square";
    document.querySelector(".container").appendChild(square);

    // Hover effect     
    square.addEventListener(
        "mouseenter",
        (event) => {
            // highlight the mouseenter target
            event.target.style.backgroundColor = "aqua";

            // reset the color after a short delay
            setTimeout(() => {
                event.target.style.backgroundColor = "";            
            }, 500);
        },
        false,
    );    
}
