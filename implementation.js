// Node Class
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// LinkedList Class
class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    size() {
        let count = 0;
        let node = this.head;
        while (node);
        count ++;
        node = node.next;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let lastNode = this.head;
        if(lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

}