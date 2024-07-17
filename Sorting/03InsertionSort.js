// Function to perform insertion sort
function insertionSort(arr) {
    const N = arr.length;
    // 1. Count number of passes or take backup of one element at a time starting from 1 index
    for (let i = 1; i < N; i++) {
        // 2. Take backup of ith element
        let temp = arr[i];
        let j;
        // 3. Compare backed up element with all its left neighbours
        for (j = i - 1; j >= 0 && arr[j] > temp; j--) {
            // 4. Move left neighbour one position ahead
            arr[j + 1] = arr[j];
        }
        // 5. Insert backed up element at its appropriate position (j + 1)
        arr[j + 1] = temp;
    }
}

// Main code
const arr = [55, 44, 22, 66, 11, 33];

console.log("Array before sort:", arr);
insertionSort(arr);
console.log("Array after sort:", arr);
