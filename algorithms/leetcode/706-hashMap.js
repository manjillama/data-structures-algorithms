/**
 * Initialize your data structure here.
 */
var MyHashMap = function () {
  this.map = {};
};

/**
 * value will always be non-negative.
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function (key, value) {
  this.map[key] = value;
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function (key) {
  if (typeof this.map[key] !== 'undefined') return this.map[key];
  return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function (key) {
  delete this.map[key];
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 */
var obj = new MyHashMap();
obj.put(1, 'Manjil');
console.log(obj.get(1));
obj.remove(1);
console.log(obj.get(1));
