/*

    CREATED BY ALEXANDER TEJEDA

*/

// Constants that will hold and act as the events listeners for when the buttons are clicked and apply the neccessary sort to the array
const ON_LOAD = document.addEventListener("DOMContentLoaded", () => {
    const INTEGER_ARRAY = generateRandomArray();
    console.log(INTEGER_ARRAY);
});
const BUBBLE_SORT = document.getElementById("bubble").addEventListener("click", () => {
    console.log("Bubble Sort");
})
const MERGE_SORT = document.getElementById("merge").addEventListener("click", () => {
    console.log("Merge Sort");
})
const QUICK_SORT = document.getElementById("quick").addEventListener("click", () => {
    console.log("Quick Sort");
})
const INSERTION_SORT = document.getElementById("insertion").addEventListener("click", () => {
    console.log("Insertion Sort");
})
const GENERATE_ARRAY = document.getElementById("generate").addEventListener("click", () => {
    const INTEGER_ARRAY = generateRandomArray();
    console.log(INTEGER_ARRAY);
})

// Function that will generate an array with 50 integers between the bounds of (5, 100)
function generateRandomArray() {

    // Constant that will hold the arrray of integers
    const INTEGER_ARRAY = [];

    // While loop that will keep generating random integers from the bounds of (5, 105) 
    // to be pushed onto the array as long as the length of the array is less than 50
    while (true) {

        if (INTEGER_ARRAY.length === 50) {
            break;
        }

        var randomInt = Math.floor(Math.random() * 100) + 5;
        INTEGER_ARRAY.push(randomInt);
    }

    return INTEGER_ARRAY;
}