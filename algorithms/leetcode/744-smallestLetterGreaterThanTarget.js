/*
Given a list of sorted characters letters containing only lowercase letters, 
and given a target letter target, find the smallest element in the list that is larger than the given target.

Letters also wrap around. For example, if the target is target = 'z' and 
letters = ['a', 'b'], the answer is 'a'.
*/
/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let currentLetter = null;
  let min = 0,
    max = letters.length - 1;
  //   for (let l of letters) {
  //     if (l > target) return l;
  //   }
  // Binary search
  while (min <= max) {
    const mid = Math.floor((min + max) / 2);

    if (letters[mid] > target) {
      currentLetter = letters[mid];
      max = mid - 1;
    } else min = mid + 1;
  }
  console.log(currentLetter);

  if (currentLetter) return currentLetter;
  return letters[0];
};

console.log(nextGreatestLetter(['c', 'f', 'j'], 'g'));

// max = 2;
// min = 2;

// mid = 4 / 2 = 2;
