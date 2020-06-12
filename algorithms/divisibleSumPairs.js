function divisibleSumPairs(n, k, ar) {
  const a = [];
  let count = 0;
  /*
   * Initializing all the element in a to be 0
   */
  for (let i = 0; i < k; i++) {
    a[i] = 0;
  }

  for (let i = 0; i < n; i++) {
    const remainder = ar[i] % k;
    /*
        If remainder is 0 
            compliment  = k
        Else
            compliment = remainder

    */
    const complement = remainder == 0 ? k : remainder;

    count += a[k - complement];

    /*
     * Increment remainder bucket by 1
     */
    a[remainder] += 1;
  }
  return count;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 3, 2, 6, 1, 2]));
