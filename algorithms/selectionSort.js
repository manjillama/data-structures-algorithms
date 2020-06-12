function selectionSort() {
  let arr = [2, 3, 5, 4, 2, 1, 7, 9, 8, 6, 0];

  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    let temp = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }

    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr;
}

console.log(selectionSort());
