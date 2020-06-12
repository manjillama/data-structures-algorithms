/*
 * Fibonacci with dynamic programming
 * Dynamic Programming = Divide & Conquer + Memoization
 */
function fibonacci() {
  let cache = {};
  return function fib(n) {
    /*
     * if n is in cache
     */
    if (n in cache) return cache[n];
    else {
      if (n < 2) return n;
      else {
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
      }
    }
  };
}

const fasterFib = fibonacci();
console.log(fasterFib(10));
