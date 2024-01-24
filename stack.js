/** Node: node for a stack. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Stack: chained-together nodes where you can
 *  remove from the top or add to the top. */

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** push(val): add new value to end of the stack. Returns undefined. */

  push(val) {
    // create new node from val
    const newNode = new Node(val);
    // check if newNode needs to be first and last in stack
    this.size ? newNode.next = this.first : this.last = newNode;
    // set last to newNode
    this.first = newNode;
    // increment size
    this.size++;
    // return undefined
    return undefined;
  }

  /** pop(): remove the node from the top of the stack
   * and return its value. Should throw an error if the stack is empty. */

  pop() {
    // check if stack is empty
    if(this.size) {
      // access first in stack
      const firstNode = this.first;
      // set next node to first using firstNode
      this.first = firstNode.next;
      // deincrement the size of stack
      this.size--;
      // return firstNode's val
      return firstNode.val;
    } else {
      throw new Error("Stack is empty");
    }
  }

  /** peek(): return the value of the first node in the stack. */

  peek() {
    // check if stack is empty
    if(this.size) {
      // return val of first
      return this.first.val;
    } else {
      throw new Error("Stack is empty");
    }
  }

  /** isEmpty(): return true if the stack is empty, otherwise false */

  isEmpty() {
    // if size > 0 stack is not empty
    if(this.size) {
      return false;
    }

    // if size === 0 stack is empty
    return true;
  }
}

module.exports = Stack;
