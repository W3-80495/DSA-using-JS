// Function to perform selection sort
function selectionSort(arr) {
    const N = arr.length;
    // 1. Select positions of array one by one from 0 to N-2
    for (let i = 0; i < N - 1; i++) {
        // 2. Compare other elements with the selected position element one by one
        for (let j = i + 1; j < N; j++) {
            // 3. If selected position element is greater than other element, swap both
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

// Main code
const arr = [44, 11, 55, 22, 66, 33];

console.log("Before sort:", arr);
selectionSort(arr);
console.log("After sort:", arr);
