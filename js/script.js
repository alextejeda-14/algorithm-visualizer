/*

    CREATED BY ALEXANDER TEJEDA

*/

// Constants that will hold and act as the events listeners for when the buttons are clicked and apply the neccessary sort to the array
const BUBBLE_SORT = document.getElementById("bubble").addEventListener("click", () => {
    console.log("Bubble Sort");
    const INTEGER_ARRAY = generateRandomArray();

    console.log("Unsorted", INTEGER_ARRAY);
    const SORTED_INTEGER_ARRAY = bubbleSort(INTEGER_ARRAY);
    console.log("Sorted", SORTED_INTEGER_ARRAY);
})
const MERGE_SORT = document.getElementById("merge").addEventListener("click", () => {
    console.log("Merge Sort");
    const INTEGER_ARRAY = generateRandomArray();

    console.log("Unsorted", INTEGER_ARRAY);
    const SORTED_INTEGER_ARRAY = mergeSort(INTEGER_ARRAY);
    console.log("Sorted", SORTED_INTEGER_ARRAY);
})
const QUICK_SORT = document.getElementById("quick").addEventListener("click", () => {
    console.log("Quick Sort");
    const INTEGER_ARRAY = generateRandomArray();

    console.log("Unsorted", INTEGER_ARRAY);
    const SORTED_INTEGER_ARRAY = quickSort(INTEGER_ARRAY);
    console.log("Sorted", SORTED_INTEGER_ARRAY);
})
const INSERTION_SORT = document.getElementById("insertion").addEventListener("click", () => {
    console.log("Insertion Sort");
    const INTEGER_ARRAY = generateRandomArray();

    console.log("Unsorted", INTEGER_ARRAY);
    const SORTED_INTEGER_ARRAY = insertionSort(INTEGER_ARRAY);
    console.log("Sorted", SORTED_INTEGER_ARRAY);
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