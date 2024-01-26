class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.size = 0;
    }

    isEmpty() {
        if(!this.size) {
            return true;
        } else {
            return false;
        }
    }

    push(val) {
        // make node out of val
        const newNode = new Node(val);
        // check if stack is empty
        if(!(this.isEmpty())) {
            // add current first to newNode's next attr
            newNode.next = this.first;
        }
        // update this first attr to newNode
        this.first = newNode;
        // increment size
        this.size++;
        // return undefined
        return undefined;
    }

    pop() {
        // throw error if popping empty stack
        if(this.isEmpty()) {
            throw new Error("Stack is empty.");
        }
        // get first node
        const removed = this.first;
        // update first
        this.first = removed.next;
        // deincrement size
        this.size--;
        // return removed val
        return removed.val;
    }

    peek() {
        // return undefined when stack is empty.
        if(this.isEmpty()) {
            return undefined;
        }
        // return current first
        return this.first.val;
    }

}

function reverseString(str) {
    const stack = new Stack();
    for(let i = 0; i < str.length; i++) {
        let char = str[i];
        stack.push(char);
    }
    let result = '';
    while(!stack.isEmpty()) {
        result = result + stack.pop();
    }
    return result;
}
console.log(reverseString("Hello world!"));