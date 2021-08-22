/*

    CREATED BY ALEXANDER TEJEDA

*/

// Sorting algorithm that uses bubble sort
function bubbleSort(array) {

    // The lastest element is already in place
    for (let i = 0; i < array.length; i++) {

        // Iteration to check whether or now the current index is greater than the next one
        // If the current > next we are going to swap
        // If the current < next we are going to iterate to next index
        for (let j = 0; j < (array.length - i - 1); j++) {

            // Conditional to check if current index is greater than the next
            if (array[j] > array[j+1]) {
                
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }

    return array;
}