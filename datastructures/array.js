/**
@Desc Array

Array is a container which can hold a fix number of items and these items should be of the same type.
Most of the data structures make use of arrays to implement their algorithms.
Following are the important terms to understand the concept of Array.
  Element − Each item stored in an array is called an element.
  Index − Each location of an element in an array has a numerical index, which is used to identify the element.


**/
const strings = ["a", "b", "c", "d"];
// If we were on 32 bit system, item in array will take 4 shelves of memory
// i.e. 1 shelf = 8 bit = 1 Byte | 4 shelves = 32 bit = 4 byte
// 4item x 4shelves = 16 bytes of storage

// Push new item in array
strings.push("e"); // O(1)

// pop
strings.pop(); // O(1)

//Add an item in the very front of array
strings.unshift("x");

//splice
// Start from index to | remove 0 elements | add alien
strings.splice(2, 0, "alien"); // O(n)

console.log(strings);
