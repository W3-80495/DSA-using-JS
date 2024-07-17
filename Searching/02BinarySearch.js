// Function to perform iterative binary search
function binarySearchIterative(arr, key) {
    // 1. Decide left and right of original array
    let left = 0, right = arr.length - 1;
    // 2. Search key into array till valid partition
    while (left <= right) {
        // 3. Find middle element of array
        let mid = Math.floor((left + right) / 2);
        // 4. Compare key with middle element
        if (key === arr[mid]) {
            // 5. If key is matching return index of middle element
            return mid;
        }
        // 6. If key is less than middle element
        else if (key < arr[mid]) {
            right = mid - 1;
        }
        // 7. If key is greater than middle element
        else {
            left = mid + 1;
        }
    }
    // Key is not found, return -1
    return -1;
}

// Function to perform recursive binary search
function binarySearchRecursive(arr, key, left, right) {
    // 1. Stop if partition/sub array is invalid
    if (left > right) {
        return -1;
    }
    // 2. Find middle element
    let mid = Math.floor((left + right) / 2);
    // 3. Compare key with middle element
    if (key === arr[mid]) {
        return mid; // Key is found
    }
    // 4. If key is less than middle element
    else if (key < arr[mid]) {
        return binarySearchRecursive(arr, key, left, mid - 1);
    }
    // 5. If key is greater than middle element
    else {
        return binarySearchRecursive(arr, key, mid + 1, right);
    }
}

// Main code
const arr = [11, 22, 33, 44, 55, 66, 77, 88, 99];

// const key = parseInt(prompt("Enter key to be searched: "), 10);
const key = 88;

// Using iterative binary search
const ret = binarySearchIterative(arr, key);

// Using recursive binary search
// const ret = binarySearchRecursive(arr, key, 0, arr.length - 1);

if (ret !== -1) {
    console.log(`Key is found at ${ret} index`);
} else {
    console.log("Key is not found");
}
