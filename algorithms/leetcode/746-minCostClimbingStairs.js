/*
On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

Once you pay the cost, you can either climb one or two steps. You need 
to find minimum cost to reach the top of the floor, and you can either 
start from the step with index 0, or the step with index 1.
*/
/**
 * @param {number[]} cost
 * @return {number}
 */

// // Recursive - Top Down Memoization - O(n) 1ms
var minCostClimbingStairs = function (cost) {
  const n = cost.length;
  return Math.min(minCost(cost, n - 1), minCost(cost, n - 2));
};

function minCost(cost, n) {
  const cache = {};

  function recurse() {
    if (n < 0) return 0;
    if (n == 0 || n == 1) return cost[n];
    if (cache[n] !== undefined) return cache[n];
    cache[n] = cost[n] + Math.min(minCost(cost, n - 1), minCost(cost, n - 2));
    return cache[n];
  }
  return recurse();
}

// Iterative - Bottom up tabulation - O(n) 1ms
// function minCostClimbingStairs(cost) {
//   const n = cost.length;
//   const dp = {};
//   for (let i = 0; i < n; i++) {
//     if (i < 2) dp[i] = cost[i];
//     else dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
//   }
//   return Math.min(dp[n - 1], dp[n - 2]);
// }

// Fine Tuning - Reduce O(n) space to O(1).
// Iterative - Bottom up computation - O(n) time, O(1) space
// function minCostClimbingStairs(cost) {
//   const n = cost.length;
//   let first = cost[0];
//   let second = cost[1];
//   if (n <= 2) return Math.min(first, second);
//   for (let i = 2; i < n; i++) {
//     const curr = cost[i] + Math.min(first, second);
//     first = second;
//     second = curr;
//   }
//   return Math.min(first, second);
// }

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]));
