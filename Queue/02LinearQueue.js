class Queue {
    constructor(size) {
        this.SIZE = size;
        this.arr = new Array(this.SIZE);
        this.front = -1;
        this.rear = -1;
    }

    push(value) {
        // a. reposition rear (inc)
        this.rear++;
        // b. add value at rear index
        this.arr[this.rear] = value;
    }

    pop() {
        // a. reposition front (inc)
        this.front++;
    }

    peek() {
        // a. read and return value of front + 1 index
        return this.arr[this.front + 1];
    }

    isEmpty() {
        return this.front === this.rear;
    }

    isFull() {
        return this.rear === this.SIZE - 1;
    }
}

function main() {
    const q = new Queue(4);
    const sc = require('readline-sync');

    let choice;
    do {
        console.log("0. Exit\n1. Push\n2. Pop\n3. Peek");
        choice = parseInt(sc.question("Enter your choice: "));

        switch(choice) {
            case 1:
                if(q.isFull())
                    console.log("Queue is Full");
                else {
                    const value = parseInt(sc.question("Enter value to be pushed: "));
                    q.push(value);
                }
                break;
            case 2:
                if(q.isEmpty())
                    console.log("Queue is Empty");
                else
                    q.pop();
                break;
            case 3:
                if(q.isEmpty())
                    console.log("Queue is Empty");
                else
                    console.log("Peeked data: " + q.peek());
                break;
        }

    } while(choice !== 0);
}

main();
