function getTotalX(a, b) {
  let validCount = 0;

  for (let x = a[0]; x <= b[b.length - 1]; x++) {
    if (a.every((int) => x % int == 0)) {
      if (b.every((int) => int % x == 0)) {
        validCount++;
      }
    }
  }

  return validCount;
}

console.log('Length', getTotalX([3, 4], [24, 48]));
