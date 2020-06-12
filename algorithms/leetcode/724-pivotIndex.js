/*
Given an array of integers nums, write a method that returns the "pivot" 
index of this array.

We define the pivot index as the index where the sum of all the numbers to 
the left of the index is equal to the sum of all the numbers to the right 
of the index.

If no such index exists, we should return -1. If there are multiple pivot 
indexes, you should return the left-most pivot index.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  let leftSum = 0;
  let rightSum = 0;

  for (let a = 0; a < nums.length; a++) {
    rightSum += nums[a];
  }

  for (let i = 0; i < nums.length; i++) {
    rightSum -= nums[i];

    if (leftSum === rightSum) return i;
    leftSum += nums[i];
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
