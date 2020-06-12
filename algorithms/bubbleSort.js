function bubbleSort() {
  let arr = [2, 3, 5, 4, 2, 1, 7, 9, 8, 6, 0];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort());
