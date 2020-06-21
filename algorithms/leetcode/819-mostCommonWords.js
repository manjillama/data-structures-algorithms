/*
Given a paragraph and a list of banned words, return the most 
frequent word that is not in the list of banned words.  
It is guaranteed there is at least one word that isn't banned, 
and that the answer is unique.

Words in the list of banned words are given in lowercase, 
and free of punctuation.  Words in the paragraph are not case sensitive.  
The answer is in lowercase.
*/

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = (paragraph, banned) => {
  const bannedSet = new Set(banned);
  const words = paragraph.toLowerCase().split(/\W+/);
  const map = {};
  for (const w of words) {
    if (!bannedSet.has(w)) {
      if (map[w] == null) map[w] = 0;
      map[w]++;
    }
  }

  let res = '';
  let max = -Infinity;
  for (const w in map) {
    const count = map[w];
    if (count > max) {
      res = w;
      max = count;
    }
  }
  return res;
};

console.log(
  mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', [
    'hit',
  ])
);
