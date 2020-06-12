class Stack {
  constructor() {
    this.array = [];
  }

  /*
   * The last thing that we added to the list
   */
  peek() {
    return this.array[this.array.length - 1];
  }

  push(value) {
    this.array.push(value);
    return this.array;
  }

  pop() {
    this.array.pop();
    return this.array;
  }
}

const stack = new Stack();
stack.push('google');
stack.push('udemy');
stack.push('discord');
console.log(stack.peek());
stack.pop();
console.log(stack.peek());
