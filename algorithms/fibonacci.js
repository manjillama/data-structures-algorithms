/*
 * Given the number N return the index value of the Fibonacci sequence i.e.
 * 0, 1, 1, 2, 3, 5, 8, 13, 21
 * The pattern of the sequence is that each value is the sum of the 2 previous value,
 * N = 5 -> 2 + 3
 */

// O(2^n) | exponential
function fibRecursive(n) {
  if (n < 2) return n;

  return fibRecursive(n - 1) + fibRecursive(n - 2);
}
console.log(fibRecursive(3));

// O(n)
function fibonacciIterative(n) {
  let arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[n];
}
console.log(fibonacciIterative(8));
