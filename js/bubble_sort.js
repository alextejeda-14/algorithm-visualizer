/*

    CREATED BY ALEXANDER TEJEDA

*/

var container = document.getElementById("bars");

// Sorting algorithm that uses bubble sort
async function bubbleSort() {

    disableButtons();

    // Variable that will allow easier access to the elements within the DOM
    var bars = document.querySelectorAll(".bar");

    // The last element is already in place
    for (let i = 0; i < bars.length; i++) {

        // Iteration to check whether or now the current index is greater than the next one
        // If the current > next we are going to swap
        // If the current < next we are going to iterate to next index
        for (let j = 0; j < (bars.length - i - 1); j++) {

            // Styling the bars that will be comparing 
            bars[j].style.backgroundColor = "Crimson";
            bars[j + 1].style.backgroundColor = "PaleGoldenrod";

            // To wait
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 100)
            );

            // Two values that are going to be compared 
            let value1 = parseInt(bars[j].childNodes[0].innerHTML);
            let value2 = parseInt(bars[j+1].childNodes[0].innerHTML);

            // Conditional to check if current index is greater than the next
            // If true swap elements else continue
            if (value1 > value2) {
                await swapElements(bars[j], bars[j+1]);
                bars = document.querySelectorAll(".bar");
            }

            // Changing the color to the previous one
            bars[j].style.backgroundColor = "SteelBlue";
            bars[j + 1].style.backgroundColor = "SteelBlue";
        }

        // Changing the color of greatest element because in correct index
        bars[bars.length - i - 1].style.backgroundColor = "MediumSeaGreen";
    }

    sortCompleted();
}

// Function that will hold the functionality to swap two elements 
function swapElements(x, y) {

    return new Promise((resolve) => {
  
        // For exchanging styles of two blocks
        var temp = x.style.transform;
        x.style.transform = y.style.transform;
        y.style.transform = temp;
  
        // Callback function that will have a setTimeout
        window.requestAnimationFrame(function() {
  
            // To wait
            setTimeout(() => {
                container.insertBefore(y, x);
                resolve();
            }, 100);
        });
    });
}