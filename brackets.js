class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }

    getData() {
        const data = `Value: ${this.val}, Next: ${this.next}, Previous: ${this.prev}`
        return data;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    addFirst(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    addLast(val) {
        let newNode = new Node(val);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
    }

    removeFirst() {
        if (!this.head) {
            throw new Error("No items");
        }
        this.head = this.head.next;
        if (this.head) {
            this.head.prev = null;
        } else {
            this.tail = null;
        }
    }

    removeLast() {
        if (!this.tail) {
            throw new Error("No items");
        }
        this.tail = this.tail.prev;
        if (this.tail) {
            this.tail.next = null;
        } else {
            this.head = null;
        }
    }

    getFirst() {
        if (!this.head) {
            throw new Error("No items");
        }
        return this.head.val;
    }

    getLast() {
        if (!this.tail) {
            throw new Error("No items");
        }
        return this.tail.val;
    }

    isEmpty() {
        return this.head === null;
    }

    hasOneItem() {
        if(this.isEmpty() || this.head !== this.tail) {
            return false;
        }

        return true;
    }
}

class Deque {
    constructor() {
        this._dList = new DoublyLinkedList();
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    appendLeft(val) {
        // update dlist structure with new val
        this._dList.addFirst(val);
        // check if new val is the only item in _dlist
        if(this._dList.hasOneItem()) {
            this.last = this._dList.head;
        }
        // add new val to first
        this.first = this._dList.head;
        // increment size
        this.size++;
        // return undefined
        return undefined;
    }

    appendRight(val) {
        // update dlist structure with new val
        this._dList.addLast(val);
        // check if new val is the only item in _dlist
        if(this._dList.hasOneItem()) {
            this.first = this._dlist.head;
        }
        // add new val to last
        this.last = this._dList.tail;
        // increment size
        this.size++;
        // return undefined
        return undefined;
    }

    popLeft() {
        // store current first
        const first = this.first;
        // try catch updating dlist structure
        try{
            this._dList.removeFirst();
        }
        catch(err) {
            throw err;
        }
        // update deque first to match dlist structure
        this.first = this._dList.head;
        // deincrement size
        this.size--;
        // return removed val
        return first.val;
    }

    popRight() {
        // store current last
        const last = this.last;
        // try catch updating dlist structure
        try {
            this._dList.removeLast();
        }
        catch(err) {
            throw err;
        }
        // update deque last to match dlist structure
        this.last = this._dList.tail
        // deincrement size
        this.size--;
        // return removed val
        return last.val;
    }

    peekLeft() {
        return this.first.val;
    }

    peekRight() {
        return this.last.val;
    }

    isEmpty() {
        return this._dList.isEmpty();
    }
}

function isBalanced(str) {
    // declare deque
    const deque = new Deque();
    const brackets = {
        '(' : ')',
        '[' : ']',
        '{' : '}'
    };

    for (let char of str) {
        if(brackets[char]) {
            deque.appendLeft(char);
        } else if (char === ')' || char === ']' || char === '}') {
            if(brackets[deque.popLeft()] !== char) {
                return false;
            }
        }
    }

    return deque.isEmpty();
}

console.log(isBalanced("hello"), "-> true");
console.log(isBalanced("(hi) [there]"), "-> true");
console.log(isBalanced("(((hi)))"), "-> true");
console.log(isBalanced("(hello"), "-> false");
console.log(isBalanced("(nope]"), "-> false");
console.log(isBalanced("((ok) [nope)]"), "-> false");


