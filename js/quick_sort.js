/*

    CREATED BY ALEXANDER TEJEDA

*/

var container = document.getElementById("bars");
var quickSortArray = [];

// Sorting algorithm that uses and holds the logic for quick sort
async function lometoPartition(left, right) {

    disableButtons();

       // Variable that will allow easier access to the elements within the DOM
    var bars = document.querySelectorAll(".bar");

    // Initialization of the pivor for each iteration and also the index to where the pivot will move to
    var pivot = parseInt(bars[right].childNodes[0].innerHTML);
    var i = left - 1;

    // Provide Crimson color to the pivot bar
    bars[right].style.backgroundColor = "Crimson";

    // Iteration of the array from the left index until the pivot is met
    for (let j = left; j <= right - 1; j++) {

        // Sets the left most bar to PaleGoldenrod
        bars[j].style.backgroundColor = "PaleGoldenrod";

        // To await
        await new Promise((resolve) => 
            setTimeout(() => {
                resolve();
            }, 150)
        );

        // Initializes the value of the node that is being accessed
        var value = parseInt(bars[j].childNodes[0].innerHTML);

        // Checking to see if the value is greater than the pivot
        if (value < pivot) {
            
            // Increment and swap the values of the two comparing nodes
            i++;
            var temp1 = bars[i].style.height;
            var temp2 = bars[i].childNodes[0].innerText;

            bars[i].style.height = bars[j].style.height;
            bars[j].style.height = temp1;

            bars[i].childNodes[0].innerText = bars[j].childNodes[0].innerText;
            bars[j].childNodes[0].innerText = temp2;

            bars[i].style.backgroundColor = "LightSalmon";

            // If the index if i and j are the same 
            if (i != j) {

                bars[j].style.backgroundColor = "PaleVioletRed";
            }

            // To await
            await new Promise((resolve) => 
                setTimeout(() => {
                    resolve();
                }, 150)
            );
        }

        // 
        else {

            bars[j].style.backgroundColor = "PaleVioletRed";
        }
    }

    // Incrementing and swapping the ith pivot with the corresponding node
    i++;
    var temp1 = bars[i].style.height;
    var temp2 = bars[i].childNodes[0].innerText;

    bars[i].style.height = bars[right].style.height;
    bars[right].style.height = temp1;

    bars[i].childNodes[0].innerText = bars[right].childNodes[0].innerText;
    bars[right].childNodes[0].innerText = temp2;

    bars[right].style.backgroundColor = "PaleVioletRed";
    bars[i].style.backgroundColor = "MediumSeaGreen";

    // To await
    await new Promise((resolve) => 
        setTimeout(() => {
            resolve();
        }, 200)
    );

    // Pushes the index of the correct node place in order to reference it later with checks
    quickSortArray.push(i);

    // For loop that will iterate over the whole array of "bars"
    for (let k = 0; k < 50; k++) {

        // If the node just got swapped this iteration, make the node MediumSeaGreen
        if (k === i) {

            bars[k].style.backgroundColor = "MediumSeaGreen";
        }

        // If the node was already placed correctly before this iteration
        else {

            // If the node has already been placed in the correct index
            if (quickSortArray.includes(k)) {

                bars[k].style.backgroundColor = "MediumSeaGreen";
            }

            // If the node hasn't been placed in the correct index
            else if (!quickSortArray.includes(k)) {

                // If the quicksort array has either the adjacent indices in the array then this node must be in the correct index
                if (quickSortArray.includes(k-1) && quickSortArray.includes(k+1)) {
                    bars[k].style.backgroundColor = "MediumSeaGreen";
                }

                // Else if quicksort array contains the first index then the node at index 0 is in the correct place too
                else if (quickSortArray.includes(1)) {
                    bars[0].style.backgroundColor = "MediumSeaGreen";
                }

                // Else if quicksort array contains the second to last index then the node in the last index is in the correct place too
                else if (quickSortArray.includes(bars[49])) {
                    bars[bars.length - 1].style.backgroundColor = "MediumSeaGreen";
                }
                
                // If none of these cases apply, make the node the original SteelBlue
                else {

                    bars[k].style.backgroundColor = "SteelBlue";
                }
            }

            // No cases apply make the node the original SteelBlue
            else {

                bars[k].style.backgroundColor = "SteelBlue";
            }
        }
    }

    // Return the index at which this iteration of the swapping took place
    // in order to recursively call the next section to be iterated over
    return i;
}

// Function that holds the engine and recursive calls in order to actually sort the array
// until the sorting algorithm is completed
async function quickSorter(left, right) {

    // Checks to see if the bounds are conditionally met
    if (left < right) {

        // Initialization of the pivot that is going to be accessed and also the function calls
        // of the left and right sides of the pivot
        var pivot = await lometoPartition(left, right);

        await quickSorter(left, pivot - 1);
        await quickSorter(pivot + 1, right);
    }
    sortCompleted();
}

// Function that starts the first iteration of the quicksort array 
// without hard coding them into the function above
async function quickSort() {

    var bars = document.querySelectorAll(".bar");
    quickSorter(0, bars.length - 1);
}