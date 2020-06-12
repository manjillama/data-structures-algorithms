/*
 * Return true if the input array has a pair for the sum given
 */

// Naive approach - O(n^2)
function hasPairWithSum(arr, sum) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = i + 1; j < len; j++) {
      if (arr[i] + arr[j] === sum) return true;
    }
  }

  return false;
}

// better - O(n)
function hasPairWithSum2(arr, sum) {
  const mySet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) return true;
    mySet.add(sum - arr[i]);
  }
  return false;
}

console.log(hasPairWithSum2([1, 2, 3, 4], 9));
