/** @Desc

Hashing is a technique that is used to uniquely identify a specific object from a group of
similar objects. Some examples of how hashing is used in our lives include:
In universities, each student is assigned a unique roll number that can be used to
retrieve information about them. In libraries, each book is assigned a unique number that
can be used to determine information about the book, such as its exact position in the library or the users it has been issued to etc.

Hashing is an important Data Structure which is designed to use a special function called the Hash function
which is used to map a given value with a particular key for faster access of elements.
The efficiency of mapping depends of the efficiency of the hash function used.
*/
class HashTable {
  constructor(size) {
    this.data = new Array(size);
    // this.data = [];
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    let address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
// console.log(myHashTable.get("apples"));
