function alphabeticShift(str) {
  var newString = '';

  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'z') {
      newString += 'a';
    } else {
      newString += String.fromCharCode(str.charCodeAt(i) + 1);
    }
  }

  return newString;
}

console.log(alphabeticShift('CRAZY'));
