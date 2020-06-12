/*
Given a string s consisting of small English letters, find and return 
the first instance of a non-repeating character in it. 
If there is no such character, return '_'.
*/
function firstNotRepeatingCharacter(s) {
  const charArr = s.split('');
  for (let i = 0; i < s.length; i++) {
    if (charArr.indexOf(charArr[i]) === charArr.lastIndexOf(charArr[i]))
      return charArr[i];
  }
  return '_';
}

console.log(firstNotRepeatingCharacter('abacabad'));
