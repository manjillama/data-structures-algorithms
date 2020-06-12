/*
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.

Also, a self-dividing number is not allowed to contain the digit zero.

Given a lower and upper number bound, output a list of every possible self dividing 
number, including the bounds if possible.
*/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function (left, right) {
  let nums = [];
  const res = [];
  for (let i = left, a = 0; i <= right; i++, a++) {
    nums[a] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    let isSelfDividing = true;
    const nArr = nums[i].toString().split('');

    for (nn of nArr) {
      if (nums[i] % parseInt(nn) !== 0) {
        isSelfDividing = false;
        break;
      }
    }
    if (isSelfDividing) res.push(nums[i]);
  }
  nums = null; //gc
  return res;
};

console.log(selfDividingNumbers(1, 22));
