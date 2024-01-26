class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = undefined;
        this.tail = undefined;
        this.size = 0;
    }

    isEmpty() {
        return this.size === 0;
    }

    push(val) {
        // console.log(`Size: ${this.size}`)
        // construct node
        const node = new Node(val);
        // check if list is empty to tell if node is head and tail
        if(this.isEmpty()) {
            // console.log('List is empty')
            this.tail = node
        } else if (this.size === 1) {
            // console.log('List Has One item')
            // console.log(`Head: ${this.head}, Tail: ${this.tail}`);
            this.tail = this.head;
            // this list should be circular, so always update tail to lead into head.
            this.tail.next = node;
        } else {
            // console.log('List has more than one item')
            this.tail.next = node;
        }
        // if there are items in list, link new node to previous and set link it to tail.
        node.next = this.head;
        node.prev = this.tail;
        // update head
        this.head = node;
        // increment size
        this.size++;
        return undefined;
    }

    pushMultipleVals(arr) {
        for (let val of arr) {
            // console.log(`Current Value: ${val}`);
            this.push(val);
        }
    }

    findSurvivor(int) {
        // start at begining of list
        let currNode = this.head;
        // run until only one item remains
        while (this.size > 1) {
            // cycle through list until you reach passed integer
            for(let i = 1; i <= int; i++) {
                // if integer is same as loop index remove node
                if(i === int) {
                    let prevNode = currNode.prev;
                    let nextNode = currNode.next;
                    prevNode.next = nextNode;
                    nextNode.prev = prevNode;
                    // deincrement size
                    this.size--;
                    // update head and tail if necessary
                    if(this.head === currNode) {
                        this.head = nextNode;
                    }
                    if (this.tail === currNode) {
                        this.tail = prevNode;
                        this.tail.next = this.head;
                    }
                }
                // update currNode
                currNode = currNode.next;
            }
        }
        // return val of currNode
        return currNode.val;
    }
}

const josephus = new DoublyLinkedList();
josephus.pushMultipleVals([10,9,8,7,6,5,4,3,2,1]);
// let loopCount = 0;
// let currNode = josephus.head;
// while(loopCount < josephus.size){
//     console.log(currNode.val);
//     currNode = currNode.next;
//     loopCount++;
// }
console.log(josephus.findSurvivor(3));