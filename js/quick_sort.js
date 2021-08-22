/*

    CREATED BY ALEXANDER TEJEDA

*/

function quickSort(array) {

    if (array.length < 2) {
        return array;
    }

    var pivot = array[0];
    var greaterArray = [];
    var lesserArray = [];

    for (let i = 1; i < array.length; i++) {

        if (array[i] > pivot) {
            greaterArray.push(array[i]);
        }

        else {
            lesserArray.push(array[i]);
        }
    }

    return quickSort(lesserArray).concat(pivot, quickSort(greaterArray));

}