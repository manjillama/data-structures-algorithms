class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  /*
   * The last thing that we added to the list
   */
  peek() {
    return this.top;
  }
  push(value) {
    const newNode = new Node(value);
    if (!this.top) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const holdingPointer = this.top;
      this.top = newNode;
      this.top.next = holdingPointer;
    }
    this.length++;
    return this.top;
  }
  pop() {
    if (!this.top) return null;
    // If there's just one node left
    if (this.top == this.bottom) this.bottom = null;
    this.top = this.top.next;
    this.length--;
    return this.top;
  }
}

const stack = new Stack();
stack.push('google');
stack.push('udemy');
stack.push('discord');
console.log(stack.peek(), stack.length);
stack.pop();
console.log(stack.peek(), stack.length);
