/*
A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same 
element.

Now given an M x N matrix, return True if and only if the matrix is Toeplitz.
 

Example 1:

Input:
matrix = [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
]
Output: True
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.
*/
/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function (matrix) {
  // For loop from 1 to n-1 | i
  for (let i = 1; i < matrix.length; i++)
    // For loop from 1 to n-1 | j
    for (let j = 1; j < matrix[i].length; j++)
      if (matrix[i][j] !== matrix[i - 1][j - 1]) return false;
  return true;
};

console.log(
  isToeplitzMatrix([
    [1, 2],
    [2, 1],
  ])
);
