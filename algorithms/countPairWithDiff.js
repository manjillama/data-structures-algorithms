function countPairsWithDifference(k, nums) {
  const arr = nums.sort((a, b) => a - b);
  let count = 0;
  const hashMap = {};

  arr.forEach((num) => {
    hashMap[num] = hashMap[num] ? hashMap[num] + 1 : 1;
  });

  for (let i = 0; i < arr.length; i++) {
    if (hashMap[arr[i] + k]) {
      if (k === 0 && hashMap[arr[i]] > 1) {
        hashMap[arr[i]] = 0;
        count++;
      } else if (k > 0 && hashMap[arr[i]] > 0) {
        hashMap[arr[i]] = 0;
        count++;
      }
    }
  }

  return count;
}

console.log(countPairsWithDifference(2, [1, 3, 1, 8]));
