/*
Given a list of strings words representing an English Dictionary, 
find the longest word in words that can be built one character at a time by 
other words in words. If there is more than one possible answer, 
return the longest word with the smallest lexicographical order.

If there is no answer, return the empty string.
Example 1:

Input: 
words = ["w","wo","wor","worl", "world"]
Output: "world"
Explanation: 
The word "world" can be built one character at a time by "w", "wo", "wor", and "worl".
*/
var longestWord = function (words) {
  words.sort();
  let set = new Set();
  let res = '';
  console.log(words);

  for (let word of words) {
    /*
      word.slice(0, -1) will trim the last letter from word
    */
    if (word.length === 1 || set.has(word.slice(0, -1))) {
      set.add(word);
      if (word.length > res.length) res = word;
    }
  }
  return res;
};

console.log(
  longestWord([
    'rac',
    'rs',
    'ra',
    'on',
    'r',
    'otif',
    'o',
    'onpdu',
    'rsf',
    'rs',
    'ot',
    'oti',
    'racy',
    'onpd',
  ])
);

/*

["rac","rs","ra","on","r","otif","o","onpdu","rsf","rs","ot","oti","racy","onpd"]
['w', 'wo', 'wor', 'worl', 'world']
[
    'm',
    'mo',
    'moc',
    'moch',
    'mocha',
    'l',
    'la',
    'lat',
    'latt',
    'latte',
    'c',
    'ca',
    'cat',
  ]
  */
