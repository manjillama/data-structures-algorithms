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
    this.previous = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value,
      next: null,
      previous: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.previous = newNode;
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

    if (index == this.length - 1) return this.append(value);
    if (index === 0) return this.prepend(value);

    const newNode = new Node(value);

    /*
     * Node just infront of the node that's going to be shifted
     */
    const leader = this.traverseToIndex(index - 1);
    // follower holds the current node that is that the index value
    const follower = leader.next;
    // Assigin new current node at the index value
    leader.next = newNode;
    newNode.previous = leader;
    // Adding the previous node that was at index value
    newNode.next = follower;
    follower.previous = newNode;
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
      const newNode = unwantedNode.next;
      newNode.previous = leader;
      leader.next = newNode;
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
myLinkedList.append(5);
myLinkedList.append(16).prepend(1);
console.log(myLinkedList.insert(1, 16));
myLinkedList.remove(0);
myLinkedList.printList();
