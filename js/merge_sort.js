/*

    CREATED BY ALEXANDER TEJEDA

*/

// Sorting algorithm that uses merge sort
function mergeSort(array) {

    // Grabs the middle index of the array
    const middle = array.length / 2;

    // Base case to check if the array length is 1 
    // If so return the array
    if (array.length < 2) {
        return array;
    }

    // Creates the left array from index 0 to the middle index 
    // Returns the sorted left array and the sorted right array
    const leftArray = array.splice(0, middle);
    return merge(mergeSort(leftArray), mergeSort(array));

}

// Helper function that will merge the two arrays into the correct order
function merge(left, right) {

    // Helper array to store the values
    let array = [];

    // While loop that checks if either of the arrays have a length of zero
    while (left.length && right.length) {

        // Pushes the smaller value of the left and right sub arrays 
        if (left[0] < right[0]) {
            array.push(left.shift())
        }

        else {
            array.push(right.shift())
        }
    }

    // Concatenation of the remaining elements into an array using the spread operator
    return [...array, ...left, ...right]
}