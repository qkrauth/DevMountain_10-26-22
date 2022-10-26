// singly linked list

// list node
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addToFront(value) {
        let newNode = new ListNode(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        return `added node ${JSON.stringify(newNode)}`
    }

    addToBack(value) {
        let newNode = new ListNode(value);
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        return `added node ${JSON.stringify(newNode)}`
    }

    size() {
        let count = 0;
        let runner = this.head;
        while (runner) {
            count++;
            runner = runner.next;
        }
        return count;
    }

    removeFront() {

    }

    removeBack() {

    }
}