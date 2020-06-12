/*
Given a sorted (in ascending order) integer array nums of n elements and a 
target value, write a function to search target in nums. 
If target exists, then return its index, otherwise return -1

Input: nums = [-1,0,3,5,9,12], target = 9
Output: 4
Explanation: 9 exists in nums and its index is 4
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;

  while (low <= high) {
    const midIndex = Math.floor((low + high) / 2);

    if (nums[midIndex] === target) return midIndex;
    else if (nums[midIndex] < target) low = midIndex + 1;
    else high = midIndex - 1;
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
