class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/* 
    Highest number will have the max priority
*/
class PriorityQueue {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  /*
   * The very first item in queue
   */
  peek() {
    return this.head;
  }

  /*
   * Add new node to the queue
   * Max value goes first in the queue
   */
  enqueue(value) {
    /*
     * If head is null
     * Add new node
     */
    if (!this.head) {
      this.head = new Node(value);
      this.length++;
      return;
    }

    let currentNode = this.head;
    let parentNode = null;

    while (currentNode) {
      /*
       * If head node value is lesser than the new value
       * Replace head node with new value and shift previous head node to next
       */
      if (!parentNode && currentNode.value < value) {
        const holdingPointer = currentNode;
        this.head = new Node(value);
        this.head.next = holdingPointer;
        break;
      }

      /*
       * If node value is lesser than the current value
       * Add new value and shift previous value to next
       */
      if (currentNode.value < value) {
        const holdingPointer = currentNode;
        parentNode.next = new Node(value);
        parentNode.next.next = holdingPointer;
        break;
      }

      /* 
        If next value is null
        Add new value
      */
      if (!currentNode.next) {
        currentNode.next = new Node(value);
        break;
      }

      parentNode = currentNode;
      currentNode = currentNode.next;
    }
    this.length++;
  }
}

const queue = new PriorityQueue();
queue.enqueue(16);
queue.enqueue(-1);
queue.enqueue(8);
// queue.enqueue(2);

console.log(queue.peek(), queue.length);
