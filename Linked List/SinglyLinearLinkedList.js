class List {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        return this.head === null;
    }

    addFirst(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    addLast(value) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let trav = this.head;
            while (trav.next !== null) {
                trav = trav.next;
            }
            trav.next = newNode;
        }
    }

    addPosition(value, pos) {
        const newNode = new Node(value);
        if (this.isEmpty()) {
            this.head = newNode;
        } else if (pos <= 1) {
            this.addFirst(value);
        } else {
            let trav = this.head;
            for (let i = 1; trav.next !== null && i < pos - 1; i++) {
                trav = trav.next;
            }
            newNode.next = trav.next;
            trav.next = newNode;
        }
    }

    deleteFirst() {
        if (!this.isEmpty()) {
            this.head = this.head.next;
        }
    }

    deleteLast() {
        if (!this.isEmpty()) {
            if (this.head.next === null) {
                this.head = null;
            } else {
                let trav = this.head;
                while (trav.next.next !== null) {
                    trav = trav.next;
                }
                trav.next = null;
            }
        }
    }

    deletePosition(pos) {
        if (!this.isEmpty()) {
            if (pos <= 1) {
                this.deleteFirst();
            } else {
                let trav = this.head;
                for (let i = 1; trav.next.next !== null && i < pos - 1; i++) {
                    trav = trav.next;
                }
                trav.next = trav.next.next;
            }
        }
    }

    display() {
        let trav = this.head;
        process.stdout.write("List : ");
        while (trav !== null) {
            process.stdout.write(trav.data + " ");
            trav = trav.next;
        }
        console.log("");
    }

    deleteAll() {
        this.head = null;
    }
}

class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

function main() {
    const l1 = new List();

    l1.addFirst(40);
    l1.addFirst(30);
    l1.addFirst(20);
    l1.addFirst(10);
    // 10 -> 20 -> 30 -> 40
    l1.addLast(50);
    l1.addLast(60);
    // 10 -> 20 -> 30 -> 40 -> 50 -> 60

    // l1.deleteFirst();
    // l1.deleteLast();
    // l1.addPosition(100, 8);
    l1.deletePosition(7);

    l1.display();

    l1.deleteAll();
}

main();
