/*
 * print the factorial of the given number
 */

function findFactorialRecursive(n) {
  if (n == 2) return 2;
  return n * findFactorialRecursive(n - 1);
}

console.log(findFactorialRecursive(5));

function findFactoriaIterative(n) {
  let factorial = 1;
  for (let i = 2; i <= n; i++) {
    factorial = factorial * i;
  }
  return factorial;
}

console.log(findFactoriaIterative(5));
