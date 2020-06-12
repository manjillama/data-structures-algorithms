function absoluteValuesSumMinimization(a) {
  let lowestSum = null;
  let absMinValue = null;

  for (let i = 0; i < a.length; i++) {
    let currentSum = 0;
    for (let j = 0; j < a.length; j++) {
      currentSum += Math.abs(a[j] - a[i]);
    }
    if (!lowestSum) {
      lowestSum = currentSum;
      absMinValue = a[i];
    }
    if (lowestSum > currentSum) {
      absMinValue = a[i];
      lowestSum = currentSum;
    }
  }
  return absMinValue;
}
