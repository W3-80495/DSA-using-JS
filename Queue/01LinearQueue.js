const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to create a new queue
function createQueue(size) {
    return {
        arr: new Array(size),
        front: -1,
        rear: -1,
        SIZE: size
    };
}

// Function to push a value into the queue
function push(queue, value) {
    if (isFull(queue)) {
        console.log("Queue is Full");
        return;
    }
    if (queue.front === -1) queue.front = 0; // initialize front on first push
    queue.rear++;
    queue.arr[queue.rear] = value;
}

// Function to pop a value from the queue
function pop(queue) {
    if (isEmpty(queue)) {
        console.log("Queue is Empty");
        return;
    }
    const value = queue.arr[queue.front];
    queue.arr[queue.front] = undefined; // clear the slot
    queue.front++;
    if (queue.front > queue.rear) { // reset queue if it's empty
        queue.front = queue.rear = -1;
    }
    return value;
}

// Function to peek the front value of the queue
function peek(queue) {
    if (isEmpty(queue)) {
        console.log("Queue is Empty");
        return null;
    }
    return queue.arr[queue.front];
}

// Function to check if the queue is empty
function isEmpty(queue) {
    return queue.front === -1;
}

// Function to check if the queue is full
function isFull(queue) {
    return queue.rear === queue.SIZE - 1;
}

// Main function to handle the menu and user inputs
function main() {
    const queue = createQueue(4);

    function showMenu() {
        console.log("\n0. Exit\n1. Push\n2. Pop\n3. Peek");
        readline.question("Enter your choice: ", choice => {
            switch (parseInt(choice)) {
                case 1:
                    if (isFull(queue)) {
                        console.log("Queue is Full");
                        showMenu();
                    } else {
                        readline.question("Enter value to be pushed: ", value => {
                            push(queue, parseInt(value));
                            console.log("Queue:", queue.arr);
                            showMenu();
                        });
                    }
                    break;
                case 2:
                    if (isEmpty(queue)) {
                        console.log("Queue is Empty");
                    } else {
                        const poppedValue = pop(queue);
                        console.log("Popped value:", poppedValue);
                        console.log("Queue:", queue.arr);
                    }
                    showMenu();
                    break;
                case 3:
                    if (isEmpty(queue)) {
                        console.log("Queue is Empty");
                    } else {
                        console.log("Peeked data:", peek(queue));
                    }
                    showMenu();
                    break;
                case 0:
                    readline.close();
                    break;
                default:
                    console.log("Invalid choice. Please try again.");
                    showMenu();
                    break;
            }
        });
    }

    // Start the menu
    showMenu();
}

// Execute the main function
main();
