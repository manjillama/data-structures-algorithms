/**

@Desc LINKED LIST

Linked List is a very commonly used linear data structure which consists of group of nodes in a sequence.
Each node holds its own data and the address of the next node hence forming a chain like structure.
Linked Lists are used to create trees and graphs.

Advantages of Linked Lists

  They are a dynamic in nature which allocates the memory when required.
  Insertion and deletion operations can be easily implemented.
  Stacks and queues can be easily executed.
  Linked List reduces the access time.

Disadvantages of Linked Lists

  The memory is wasted as pointers require extra memory for storage.
  No element can be accessed randomly; it has to access each node sequentially.
  Reverse Traversing is difficult in linked list.

*/

/*
Example:
10 -> 5 -> 16

let myLinkedList = {
  head: {
    value: 10,
    next: {
      value: 5,
      next: {
        value: 16,
        next: null,
      },
    },
  },
};
*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;

    this.head = newNode;
    this.length++;
    return this;
  }

  /**
  @params
  - index (at what index the value will be inserted)
  - value (value to be inserted)
  */
  insert(index, value) {
    // Check params
    if (index > this.length - 1 || index < 0)
      throw new Error('Out of bound exception');

    if (index === 0) return this.prepend(value);

    const newNode = new Node(value);

    /*
     * Node just infront of the node that's going to be shifted
     */
    const leader = this.traverseToIndex(index - 1);
    // Holdering the current node that is that the index value
    const holdingPointer = leader.next;
    // Assigin new current node at the index value
    leader.next = newNode;
    // Adding the previous node that was at index value
    newNode.next = holdingPointer;
    this.length++;
    return this;
  }

  /**
  @params
  - index (node's index to be deleted)
  */
  remove(index) {
    if (index > this.length - 1 || index < 0)
      throw new Error('Out of bound exception');

    if (index === 0) {
      this.head = this.head.next;
    } else {
      const leader = this.traverseToIndex(index - 1);
      const unwantedNode = leader.next;
      leader.next = unwantedNode.next;
    }

    this.length--;
    return this;
  }

  traverseToIndex(index) {
    //check for params
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }

  /*
  * Let's see how reverse is working
  *  Given the linkedlist is
  *    1 -> 10 -> null
  * (*) means iteration

    if(no second node)
      return list

    first = 1 -> 10 -> null
      * 10 -> 1 -> 10 -> null

    second = 10 -> null
      * 10 -> 1 -> 10 -> null
      * null

    while (second){
      temp =
        * null
    }

    (1 -> 10 -> null)
    this.head = 1 -> null //Ending circular reference
    this.head = 10 -> 1 -> null
  }

  */
  reverse() {
    if (!this.head.next) return this.head;

    let first = this.head;
    this.tail = this.head;
    let second = first.next;

    while (second) {
      //Next node
      const temp = second.next;
      // Assigning first node as second node's next
      second.next = first;
      // Swapping first with second
      first = second;
      // Second is now the next node
      second = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }

  printList() {
    const array = [];
    let currentNode = this.head;

    /*
     * (While loop are great if we don't know the length of our list)
     * We're going to keep looping until the current node is null
     */
    while (currentNode != null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    console.log(array);
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.prepend(1);
// myLinkedList.insert(2, 16);
// myLinkedList.remove(0);
console.log('Reversed', myLinkedList.reverse());
// myLinkedList.printList();
