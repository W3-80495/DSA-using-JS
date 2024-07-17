// Function to perform bubble sort
function bubbleSort(arr) {
    const N = arr.length;
    let comp = 0, passes = 0;
    // 1. Repeat comparisons N-1 times
    for (let i = 1; i < N; i++) {
        passes++;
        // 2. Compare all consecutive elements of array
        for (let j = 0; j < N - 1; j++) {
            comp++;
            // 3. Compare two elements
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log("No of passes:", passes);
    console.log("No of comparisons:", comp);
}

// Function to perform improved bubble sort
function improvedBubbleSort(arr) {
    const N = arr.length;
    let comp = 0, passes = 0;
    // 1. Repeat comparisons N-1 times
    for (let i = 1; i < N; i++) {
        passes++;
        // 2. Compare all consecutive elements of array
        for (let j = 0; j < N - i; j++) {
            comp++;
            // 3. Compare two elements
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    console.log("No of passes:", passes);
    console.log("No of comparisons:", comp);
}

// Function to perform further improved bubble sort
function furtherImprovedBubbleSort(arr) {
    const N = arr.length;
    let comp = 0, passes = 0, flag;
    // 1. Repeat comparisons N-1 times
    for (let i = 1; i < N; i++) {
        flag = 0;
        passes++;
        // 2. Compare all consecutive elements of array
        for (let j = 0; j < N - i; j++) {
            comp++;
            // 3. Compare two elements
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                flag = 1;
            }
        }
        if (flag === 0) break;
    }
    console.log("No of passes:", passes);
    console.log("No of comparisons:", comp);
}

// Main code
const arr = [33, 22, 66, 55, 44, 11];

console.log("Array before sort:", arr);
// Uncomment the desired sort function to use
// bubbleSort(arr);
// improvedBubbleSort(arr);
furtherImprovedBubbleSort(arr);
console.log("Array after sort:", arr);
