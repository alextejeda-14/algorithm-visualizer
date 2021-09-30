/*

    CREATED BY ALEXANDER TEJEDA

*/

// Sorting algorithm that holds the logic to execute merge sort
async function merge(start, mid, end) {

    // Disabling the buttons on the DOM until the algorithm is completed
    disableButtons();

    // DOM manipulation in order to access all the bars that were generated
    var bars = document.querySelectorAll(".bar");

    // Variables that will hold the values of the sorted array and counters
    var mergeSortArray = new Array();
    var frontCounter = start;
    var midCounter = mid + 1;

    // Iteration over the desired portion of the array to change the colors,
    // this visually shows the user what is being compared 
    for (let j = frontCounter; j <= end; j++) {

        bars[j].style.backgroundColor = "PaleGoldenrod";
    }

    // Iteration over the desired portion and also sorts the array according to the counters
    while (frontCounter <= mid && midCounter <= end) {

        // Variables that hold the values of the two elements that are being compared and pushed into the array
        let value1 = parseInt(bars[frontCounter].childNodes[0].innerHTML);
        let value2 = parseInt(bars[midCounter].childNodes[0].innerHTML);
        
        // To await
        await new Promise((resolve) => 
            setTimeout(() => {
                resolve();
            }, 100)
        );

        // Comparison to see if value1 > value2
        if (value1 >= value2) {

            mergeSortArray.push(value2);
            midCounter++;
        }

        // Value 2 > value 1
        else {
            mergeSortArray.push(value1);
            frontCounter++;
        }
    }

    // While there are still elements inside the left array push until there are no more
    while (frontCounter <= mid) {

        mergeSortArray.push(parseInt(bars[frontCounter].childNodes[0].innerHTML));
        frontCounter++;
    }

    // While there are still elements inside the right array push until there are no more
    while (midCounter <= end) {

        mergeSortArray.push(parseInt(bars[midCounter].childNodes[0].innerHTML));
        midCounter++;
    }

    // This iteration over the mergeSortArray (sorted array) shows the actual visiualization and changes within the DOM
    for(let i = start, point = 0 ; i <= end && point < mergeSortArray.length; i++, point++) {

        // To await
        await new Promise((resolve) => 
            setTimeout(() => {
                resolve();
            }, 150)
        );

        // Swapping the correct values to the correct corressponding indices based on the sorted array 
        bars[i].style.height = `${mergeSortArray[point] * 3}px`;
        bars[i].childNodes[0].innerHTML = mergeSortArray[point];
        bars[i].style.backgroundColor = "MediumSeaGreen";
    }
    sortCompleted();
}

// Function that holds the engine and recursive calls in order to actually sort the array
// until the sorting algorithm is completed
async function mergeSorter(start, end) {

    if (start < end) {

        let mid = Math.floor((start + end) / 2);
        await mergeSorter(start, mid);
        await mergeSorter(mid + 1, end);
        await merge(start, mid, end);
    }
}

// Function that starts the first iteration of the quicksort array 
// without hard coding them into the function above
async function mergeSort() {

    var bars = document.querySelectorAll(".bar");
    mergeSorter(0, bars.length - 1);
}