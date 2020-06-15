/*
Given a Binary Search Tree (BST) with the root node root, return the minimum difference between 
the values of any two different nodes in the tree.
*/
const root = {
  val: 27,
  left: null,
  right: {
    val: 34,
    left: null,
    right: {
      val: 58,
      left: {
        val: 50,
        left: null,
        right: {
          val: 44,
          left: null,
          right: null,
        },
      },
      right: null,
    },
  },
};

let countDiff = Infinity;

var minDiffInBST = function (root) {
  //DFS
  if (root.left) {
    if (countDiff > Math.abs(root.val - root.left.val))
      countDiff = Math.abs(root.val - root.left.val);
    minDiffInBST(root.left);
  }

  if (root.right) {
    if (countDiff > Math.abs(root.val - root.right.val))
      countDiff = Math.abs(root.val - root.right.val);
    minDiffInBST(root.right);
  }
  return countDiff;
};

console.log(minDiffInBST(root));
