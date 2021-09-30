/*

    CREATED BY ALEXANDER TEJEDA

*/

// Sorting algorithm that holds the logic to execute selection sort
async function selectionSort() {

    // Disabling the buttons on the DOM until the algorithm is completed
    disableButtons();

    // Variable that will allow easier access to the elements within the DOM
    var bars = document.querySelectorAll(".bar");

    // Initializing the minimum index that holds the smallest value
    var minIndex = 0;

    // Iteration over the array starting from index 0
    for (let i = 0; i < bars.length; i++) {

        // Declaring the minimum index to be the ith index in the first for-loop
        // and to style this to have the color Crimson
        minIndex = i;
        bars[i].style.backgroundColor = "Crimson";

        // Nested for-loop that will iterate over the array starting from index (i + 1)
        for (let j = i + 1; j < bars.length; j++) {

            // Styling the bar to have the PaleGoldenrod to establish that it is being iterated over
            bars[j].style.backgroundColor = "PaleGoldenrod";

            // To wait
            await new Promise((resolve) =>
                setTimeout(() => {
                        resolve();
                }, 100)
            );

            // Declaration of variables that will hold the current values of the minimum value in the array and the current value
            // that is being pointed to inside the nested loop
            var value1 = parseInt(bars[j].childNodes[0].innerHTML);
            var value2 = parseInt(bars[minIndex].childNodes[0].innerHTML);

            // If the current values being accessed is less than the minimum, swap
            if (value1 < value2) {

                if (minIndex !== i) {

                    bars[minIndex].style.backgroundColor = "SteelBlue";
                }

                // Swapping of minimum index with styling 
                bars[minIndex].style.backgroundColor = "SteelBlue";
                minIndex = j;
                bars[minIndex].style.backgroundColor = "Crimson";
            }

            else {
                bars[j].style.backgroundColor = "SteelBlue";
            }
        }

        // Actually data swapping that will move the minimum index to the front
        var temp1 = bars[minIndex].style.height;
        var temp2 = bars[minIndex].childNodes[0].innerHTML;

        bars[minIndex].style.height = bars[i].style.height;
        bars[i].style.height = temp1;

        bars[minIndex].childNodes[0].innerHTML = bars[i].childNodes[0].innerHTML;
        bars[i].childNodes[0].innerHTML = temp2;

        // To wait
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 100)
        );

        // Establishing that ith iteration bar is now in the correct index 
        // and we can move onto the ith index until the array is sorted
        bars[minIndex].style.backgroundColor = "SteelBlue";
        bars[i].style.backgroundColor = "MediumSeaGreen";
    }
    sortCompleted();
}