/*
 * Breath first search - binary
 */
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }
  dfsInOrder() {
    return traverseInOrder(this.root, []);
  }
  dfsPreOrder() {
    return traversePreOrder(this.root, []);
  }
  dfsPostOrder() {
    return traversePostOrder(this.root, []);
  }
}

function traverseInOrder(node, list) {
  if (node.left) traverseInOrder(node.left, list);

  list.push(node.value);
  if (node.right) traverseInOrder(node.right, list);

  return list;
}

function traversePreOrder(node, list) {
  list.push(node.value);
  if (node.left) traversePreOrder(node.left, list);

  if (node.right) traversePreOrder(node.right, list);

  return list;
}

function traversePostOrder(node, list) {
  if (node.left) traversePostOrder(node.left, list);

  if (node.right) traversePostOrder(node.right, list);
  list.push(node.value);

  return list;
}

/*
InOrder - [1, 4, 6, 9, 15, 20, 170]
PreOrder - [9, 4, 1, 6, 20, 15, 170]
PostOrder - [1, 6, 15, 170, 4, 20, 9]
*/
const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log(tree.dfsInOrder());
console.log(tree.dfsPreOrder());
console.log(tree.dfsPostOrder());

//     9
//  4     20
//1  6  15  170
