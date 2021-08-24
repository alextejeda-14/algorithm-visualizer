/*

    CREATED BY ALEXANDER TEJEDA

*/

const CONTAINER = document.querySelector(".container");

// Function that will generate an array with 50 integers between the bounds of (5, 100)
function generateRandomArray() {

    deleteArray();

    // Constant that will hold the arrray of integers
    const INTEGER_ARRAY = [];

    // While loop that will keep generating random integers from the bounds of (5, 105) 
    // to be pushed onto the array as long as the length of the array is less than 50
    while (true) {

        // Checks to see if the length of the array is 50
        if (INTEGER_ARRAY.length === 50) {
            break;
        }

        // Generates a random number from (5, 105) and appends it to the array
        var randomInt = Math.floor(Math.random() * 100) + 5;
        INTEGER_ARRAY.push(randomInt);
    }

    // Iteration over the current array and creating the div elements and labels for the bars to
    // be represented inside the container
    for (let i = 0; i < INTEGER_ARRAY.length; i++) {

        // Creation of the bars that will represent individual indices within the array on the UI
        const bar = document.createElement("div");

        // Adding classes to the divs in order to style and access them
        bar.classList.add("bar");
        bar.style.height = `${INTEGER_ARRAY[i] * 3}px`;
        bar.classList.add(`translateX(${i * 30}px)`);

        // Creation of the labels that will represent the values associated with the bars that represent indices within the array
        const barlabel = document.createElement("label");
        barlabel.classList.add("bar-label");
        barlabel.innerText = `${INTEGER_ARRAY[i]}`;

        bar.appendChild(barlabel);
        CONTAINER.appendChild(bar);
    }
}

// Helper function to delete the current "array" or "bars" from the DOM to be repopulated with new array
function deleteArray() {
    const container = document.querySelector(".container");
    container.innerHTML = '';
}