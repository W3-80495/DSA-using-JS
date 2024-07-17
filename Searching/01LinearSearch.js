// Function to perform linear search
function linearSearch(arr, key) {
    // 1. Traverse array from 0 to arr.length - 1 index
    for (let i = 0; i < arr.length; i++) {
        // 2. Compare each element of array with key
        if (key === arr[i]) {
            // 3. If key is matching then return index of element
            return i;
        }
    }
    // 4. If key is not found then return -1
    return -1;
}

// Main code
const arr = [88, 33, 66, 99, 11, 77, 22, 55, 14];

// const key = parseInt(prompt("Enter key to be searched: "));
const key = 99;

const ret = linearSearch(arr, key);
if (ret !== -1) {
    console.log(`Key is found at ${ret} index`);
} else {
    console.log("Key is not found");
}
