/*
 * Given the two array arr1 and arr2
 * Find return true if there's an item that exist in both array and return false if not
 * Try to find the best computational complexity value
 */
const arr1 = ["a", "b", "c", "d"];
const arr2 = ["x", "y", "c", "z"];

const obj = {};

// O(n)
for (let i = 0; i < arr1.length; i++) {
  obj[arr1[i]] = " ";
}

// O(n)
function findSimilarities() {
  for (let i = 0; i < arr2.length; i++) {
    if (obj[arr2[i]]) return true;
  }
  return false;
}

console.log(findSimilarities());
