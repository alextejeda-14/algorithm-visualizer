/*

    CREATED BY ALEXANDER TEJEDA

*/

var container = document.getElementById("bars");

// Sorting algorithm that uses insertion sort
async function insertionSort() {

    disableButtons();

    // Variable that will allow easier access to the elements within the DOM
    var bars = document.querySelectorAll(".bar");

    // Iteration over the array
    for (let i = 1; i < bars.length; i++) {

        // Initialization of current (temp) and previous values
        let j = i - 1;
        let temp = parseInt(bars[i].childNodes[0].innerHTML);

        // To store the ith bar height to desired height from the value that is stored
        var height = bars[i].style.height;

        // Provide Crimson color to the ith bar
        bars[i].style.backgroundColor = "Crimson";

        // Loop backwards to check whether or not the index >= 0 and the current is greater then the temp
        while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > temp) {

            // Provide Crimson color to the jth bar
            bars[j].style.backgroundColor = "Crimson";

            // Swapping the values of the next and the current and decrementing
            bars[j+1].style.height = bars[j].style.height
            bars[j+1].childNodes[0].innerText = bars[j].childNodes[0].innerText;
            j--;

            // To wait
            await new Promise((resolve) =>
                setTimeout(() => {
                    resolve();
                }, 150)
            );

            // Provide light green color to sorted part of the array
            for (let k = i; k >= 0; k--) {
                bars[k].style.backgroundColor = "MediumSeaGreen";
            }

        }

        // Setting next index equal to temp to loop backwards
        bars[j+1].style.height = height;
        bars[j+1].childNodes[0].innerHTML = temp;

        // To wait
        await new Promise((resolve) =>
            setTimeout(() => {
                resolve();
            }, 150)
        );

        // Provide light green color to the ith bar
        bars[i].style.backgroundColor = "MediumSeaGreen";

    }
    sortCompleted();
}