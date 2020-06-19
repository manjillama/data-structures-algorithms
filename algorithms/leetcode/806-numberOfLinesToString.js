/**
 * @param {number[]} widths
 * @param {string} S
 * @return {number[]}
 */
var numberOfLines = function (widths, S, sum = 0, lines = 0) {
  const LINE = 100;
  for (let c of S) {
    // Getting character width index
    let i = c.charCodeAt(0) - 'a'.charCodeAt(0);
    sum += widths[i];
    if (sum > LINE) {
      lines += 1;
      sum = widths[i];
    }
  }
  return [lines + 1, sum];
};

const widths = [
  4,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
  10,
];
console.log(numberOfLines(widths, 'bbbcccdddaaa'));
