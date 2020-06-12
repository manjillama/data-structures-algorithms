/*
Find the minimum length word from a given dictionary words, which has all the letters from the string licensePlate. Such a word is said to complete the given string licensePlate

Here, for letters we ignore case. For example, "P" on the licensePlate still matches "p" on the word.

It is guaranteed an answer exists. If there are multiple answers, return the one that occurs first in the array.

The license plate might have the same letter occurring multiple times. For example, given a licensePlate of "PP", the word "pair" does not complete the licensePlate, but the word "supper" does.
*/

/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  const lpArr = licensePlate
    .replace(/\s+/g, '')
    .split('')
    .filter((w) => isNaN(parseInt(w)))
    .map((w) => w.toLowerCase());

  let smallestWord = null;
  for (word of words) {
    const arr = [...lpArr];
    for (let i = 0; i < word.length; i++) {
      const indexOf = arr.indexOf(word.charAt(i));

      if (indexOf >= 0) arr.splice(indexOf, 1);
    }
    if (!arr.length) {
      if (!smallestWord) smallestWord = word;
      else if (smallestWord.length > word.length) smallestWord = word;
    }
  }
};

shortestCompletingWord('1s3 456', ['looks', 'pest', 'stew', 'show']);
