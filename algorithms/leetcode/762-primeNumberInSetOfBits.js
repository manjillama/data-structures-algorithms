/*
Given two integers L and R, find the count of numbers in the range 
[L, R] (inclusive) having a prime number of set bits in their binary representation.

(Recall that the number of set bits an integer has is the number of 
1s present when written in binary. For example, 21 written in binary is 10101 
which has 3 set bits. Also, 1 is not a prime.)

Input: L = 6, R = 10
Output: 4
Explanation:
6 -> 110 (2 set bits, 2 is prime)
7 -> 111 (3 set bits, 3 is prime)
9 -> 1001 (2 set bits , 2 is prime)
10->1010 (2 set bits , 2 is prime)
*/
/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var countPrimeSetBits = function (L, R) {
  let count = 0;
  // loop through L to R inclusive (i)
  for (let i = L; i <= R; i++) {
    let countPrime = 0;

    // convert i to binary
    // convert binary to array
    let arr = toBinary(i).split('');
    // loop though binary
    for (let num of arr) {
      num = Number(num);

      // count number 1
      // if total number of 1 is prime then increment count
      if (num === 1) countPrime++;
    }
    // check for prime, if price do count++
    if (isPrime(countPrime)) count++;
  }
  return count;
};

function toBinary(n) {
  n = Number(n);
  if (n == 0) return '0';
  var r = '';
  while (n != 0) {
    r = (n & 1 ? '1' : '0') + r;
    n = n >>> 1;
  }
  return r;
}

function isPrime(num) {
  var sqrtnum = Math.floor(Math.sqrt(num));
  var prime = num != 1;
  for (var i = 2; i < sqrtnum + 1; i++) {
    // sqrtnum+1
    if (num % i == 0) {
      prime = false;
      break;
    }
  }
  return prime;
}

console.log(countPrimeSetBits(10, 15));
