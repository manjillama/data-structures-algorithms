/*
Note: Try to solve this task in-place (with O(1) additional memory), 
since this is what you'll be asked to do during an interview.

You are given an n x n 2D matrix that represents an image. 
Rotate the image by 90 degrees (clockwise).
*/
function rotateImage(a) {
  /* 
    Transpose
    The transpose of a matrix is a new matrix whose rows are the 
    columns of the original. 
    (This makes the columns of the new matrix the rows of the original).
  */
  for (var i = 0; i < a.length; i++) {
    for (var j = 0; j < i; j++) {
      // Switch a[i][j] and a[j][i]
      // With XOR swap
      a[i][j] ^= a[j][i];
      a[j][i] ^= a[i][j];
      a[i][j] ^= a[j][i];
    }
  }
  // Reverse columns
  for (var i in a) {
    a[i] = a[i].reverse();
  }

  return a;
}

console.log(
  rotateImage([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
);
