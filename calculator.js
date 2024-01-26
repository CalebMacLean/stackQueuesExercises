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
        return this.size === 0;
    }

    push(val) {
        // create new node from val
        const node = new Node(val);
        // update node to be linked to the prev first node
        node.next = this.first;
        // update first to be the new node
        this.first = node;
        // increment size
        this.size++;
        // return undefined
        return undefined;
    }

    pop() {
        // Throw Error when pop is called on a empty stack
        if(this.isEmpty()) {
            throw new Error("Stack is empty.");
        }
        // access first val for return after removal
        const removedVal = this.first.val;
        // update first to be next node in stack
        this.first = this.first.next;
        // deincrement size
        this.size--;

        return removedVal;
    }

    peek() {
        return this.first ? this.first.val : this.first;
    }
}

// create subclass based on the functionality of a Stack
class PoshCalculator {
    constructor() {
        this._ostack = new Stack();
        this._numstack = new Stack();
        // store operators as they will appear to strings in obj, vals will be actual operations
        this.operators = {
            "+" : function(x,y) {
                return x + y;
            },
            "-": function(x,y) {
                return x - y;
            },
            "*": function(x,y) {
                return x * y;
            },
            "/": function(x,y) {
                return x / y;
            }
        };
    }

    isNumeric(val) {
        return Number(parseFloat(val)) == val;
    }

    isOperator(val) {
        return val in this.operators;
    }

    formNodes(str) {
        // loop through str and make nodes out of each char
        for(let char of str) {
            // check if character is numeric
            if(this.isNumeric(char)) {
                // convert to number and add to stack
                this._numstack.push(Number(char));
            // check if the character is an operator
            } else if (this.isOperator(char)) {
                // leave as string and add to stack
                this._ostack.push(char);
            }
        }
    }

    executeOperator() {
        if(!(this._ostack.isEmpty()) && !(this._numstack.isEmpty())) {
            const o = this._ostack.pop();
            const yNum = this._numstack.pop();
            const xNum = this._numstack.pop();

            if(this._ostack.isEmpty() && this._numstack.isEmpty()) {
                console.log(`Inside Stacks Are Empty: ${xNum} ${o} ${yNum}`);
                return this.operators[o](xNum, yNum);
            } else {
                console.log(`Inside Stacks Aren't Empty: ${xNum} ${o} ${yNum}`);
                this._numstack.push(this.operators[o](xNum, yNum));
                return undefined;
            }
        }
    }
}

function calc(str) {
    // create PoshCalculator instance
    const calculator = new PoshCalculator();
    // create nodes from string and push them into calculator's stack
    calculator.formNodes(str);
    // loop through nodes updating result based on next operation in stack.
    let result = 0;
    while(!calculator._ostack.isEmpty()) {
        let loopResult = calculator.executeOperator();
        if (loopResult) {
            result = loopResult
        }
    }
    return result;
}

console.log(calc("+ 1 2"), " -> 3");
console.log(calc("* 2 + 1 2"), " -> 6");
console.log(calc("+ 9 * 2 3"), " -> 15");
console.log(calc("- 1 2"), " -> -1");
console.log(calc("- 9 * 2 3"), " -> 3");
console.log(calc("/ 6 - 4 2"), " -> 3");
