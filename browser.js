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

class BrowserHistory {
    constructor() {
        this.backStack = new Stack();
        this.forwardStack = new Stack();
    }

    addToStack(direction, val) {
        switch (direction.toLowerCase()) {
            case "back":
                this.backStack.push(val);
                break;
            case "forward":
                this.forwardStack.push(val);
                break;
            default:
                throw new Error("Direction must be forward or back.");
        }
    }

    goToSite(direction) {
        switch(direction.toLowerCase()) {
            case "back":
                if(!(this.backStack.isEmpty())){
                    const url = this.backStack.pop();
                    this.addToStack('forward', url);
                    return url;
                }
                throw new Error("There are no previous sites saved.");
                break;
            case "forward":
                if(!(this.forwardStack.isEmpty())){
                    const url = this.forwardStack.pop();
                    this.addToStack('back', url);
                    return url;
                }
                throw new Error("There are no next sites saved.");
                break;
            default:
                throw new Error("Direction must be forward or back");
        }
    }
}

const history = new BrowserHistory();
history.addToStack('back', 'google.com');
history.addToStack('back', 'amazon.com');
history.addToStack('back', 'youtube.com');
// let first = history.backStack.first;
// while(first) {
//     console.log(first.val);
//     first = first.next;
// }
history.addToStack('forward', 'facebook.com');
history.addToStack('forward', 'x.com');
history.addToStack('forward', 'instagram.com');
// let f = history.forwardStack.first;
// while(f) {
//     console.log(f.val);
//     f = f.next;
// }
console.log(history.goToSite('back'));
console.log(history.goToSite('back'));
console.log(history.goToSite('forward'));