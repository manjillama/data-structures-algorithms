/*
We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to 
the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' 
after one shift on A. 
Return True if and only if A can become B after some number of shifts on A.

Example 1:
Input: A = 'abcde', B = 'cdeab'
Output: true

Example 2:
Input: A = 'abcde', B = 'abced'
Output: false
*/
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function (A, B) {
  let i = A.indexOf(B[0]);

  while (i < A.length) {
    let s = A.substring(i) + A.substring(0, i);
    if (s == B) return true;
    i = A.indexOf(B[0], i + 1);
    if (i === -1) return false;
  }

  return false;
};
console.log(rotateString('abcde', 'abced'));
