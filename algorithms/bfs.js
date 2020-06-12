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
  breadthFirstSearch() {
    let currentNode = this.root;
    let list = []; //add number into order of bfs
    let queue = []; //keep track of the level of we're at to access the children

    queue.push(currentNode);

    while (queue.length > 0) {
      currentNode = queue.shift(); //shift returns and removes the first item
      list.push(currentNode.value);
      if (currentNode.left) queue.push(currentNode.left);

      if (currentNode.right) queue.push(currentNode.right);
    }
    return list;
  }
  breadthFirstSearchR(queue, list) {
    if (!queue.length) return list;
    const currentNode = queue.shift();
    list.push(currentNode.value);
    if (currentNode.left) queue.push(currentNode.left);
    if (currentNode.right) queue.push(currentNode.right);
    return this.breadthFirstSearchR(queue, list);
  }
}

var isValidBST = function (root) {
  if (!root) {
    return true; // Sanity check for passing test case '[]'
  }

  function helper(root, min, max) {
    if (!root) {
      return true; // We hit the end of the path
    }

    if (
      (min !== null && root.val <= min) ||
      (max !== null && root.val >= max)
    ) {
      return false; // current node's val doesn't satisfy the BST rules
    }

    // Continue to scan left and right
    return (
      helper(root.left, min, root.val) && helper(root.right, root.val, max)
    );
  }

  return helper(root, null, null);
};

const tree = new BinarySearchTree();
tree.insert(2);
tree.insert(1);
tree.insert(3);
// tree.insert(20);
// tree.insert(170);
// tree.insert(15);
// tree.insert(1);
// console.log('BFS', tree.breadthFirstSearch());
// console.log('BFS Recursive', tree.breadthFirstSearchR([tree.root], []));
console.log('Valid', isValidBST(tree.root));

//     9
//  4     20
//1  6  15  170
