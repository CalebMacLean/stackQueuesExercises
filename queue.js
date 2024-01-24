/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    // instantiate node with the val passed to enque
    const newNode = new Node(val);
    // check size to determine if new Node needs to be first and last
    this.size ? this.last.next = newNode : this.first = newNode;
    // add newNode to end of queue
    this.last = newNode;
    // increment size by one
    this.size++
    // return undefined
    return undefined;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    // check if queue has items
    if(this.size) {
      // grab first in queue
      const firstNode = this.first;
      // shift first in queue to next item
      this.first = firstNode.next;
      // deincrement size
      this.size--;
      // return original first node
      return firstNode.val;
    } else {
      throw new Error("Queue is empty.");
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    // check if queue has items
    if(this.size) {
      // return first node in queue
      return this.first.val;
    } else {
      // throw error if queue has no items
      throw new Error("Queue is empty.");
    }
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    // check if queue has items
    if (this.size) {
      // if this.size > 0 the queue is not empty
      return false;
    }
    // if this.size == 0 the queue is empty
    return true;
  }
}

module.exports = Queue;