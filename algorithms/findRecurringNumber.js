function findRecurringNumber(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        return arr[i];
      }
    }
  }
  return undefined;
}

function findRecurringNumber1(arr) {
  const set = new Set();
  // O(n)
  for (let i = 0; i < arr.length; i++) {
    //O(1)
    if (set.has(arr[i])) return arr[i];
    //O(1)
    else set.add(arr[i]);
  }
  return undefined;
}

// O(n)
console.log(findRecurringNumber([2, 3, 4, 3, 2, 6]));
