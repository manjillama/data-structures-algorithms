function insertionSort() {
  let arr = [9, 3, 6, 5, 1, 8, 2, 7, 2, 4];
  const length = arr.length;

  for (let i = 0; i < length; i++) {
    if (arr[i] < arr[0]) {
      //remove a[i] from the array and add it to the first index
      arr.unshift(arr.splice(i, 1)[0]);
    } else {
      // Find where the number should go
      for (let j = 1; j < i; j++) {
        // if number goes in middle of two other  numbers
        if ((arr[i] > arr[j - 1] && arr[i] < arr[j]) || arr[i] === arr[j])
          // move the number to right
          arr.splice(j, 0, arr.splice(i, 1)[0]);
      }
    }
  }
  return arr;
}

console.log(insertionSort());
