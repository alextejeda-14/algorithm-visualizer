/*

    CREATED BY ALEXANDER TEJEDA

*/

// Sorting algorithm that uses insertion sort
function insertionSort(array) {

    // Iteration of the array
    for (let i = 1; i < array.length; i++) {

        // Initialization of current (temp) and previous value
        let j = i - 1;
        let temp = array[i];

        // Loop backwards to check whether or not the index >= 0 and the current is greater then the temp
        while (j >= 0 && array[j] > temp) {

            // Swapping the values of next and current and decrementing 
            array[j+1] = array[j];
            j--;
        }

        // Setting next index equal to temp to loop backwards
        array[j+1] = temp;

    }

    return array;

}