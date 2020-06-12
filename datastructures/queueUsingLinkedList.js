class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  /*
   * The very first item in queue
   */
  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.first) this.first = this.last = newNode;
    else {
      //Assigning next node in last node
      this.last.next = newNode;
      // Updating the current last node to new node(new last node)
      this.last = newNode;
    }
    this.length--;
  }

  dequeue() {
    if (!this.first) return null;
    if (!this.first == this.last) this.last = null;
    const holdingPointer = this.first;
    this.first = this.first.next;
    this.length--;
    return holdingPointer;
  }
}

const queue = new Queue();
queue.enqueue('Joy');
queue.enqueue('Matt');
queue.enqueue('Pavel');
console.log(queue.peek());
queue.dequeue();
console.log(queue.peek());
