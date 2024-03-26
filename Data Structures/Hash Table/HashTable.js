/**
 * Class representing a Hash Table.
 * @class
 */
class HashTable {
    /**
     * Create a HashTable.
     * @constructor
     */
    constructor() {
      /**
       * The hash table array.
       * @type {Array<Array<Array<*>>>}
       */
      this.table = new Array(127);
      
      /**
       * The number of key-value pairs in the hash table.
       * @type {number}
       */
      this.size = 0;
    }
  
    /**
     * Hashes the key to find the index.
     * @param {string} key - The key to be hashed.
     * @returns {number} - The index for the key.
     */
    _hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i);
      }
      return hash % this.table.length;
    }
  
    /**
     * Sets a key-value pair in the hash table.
     * @param {string} key - The key to set.
     * @param {*} value - The value corresponding to the key.
     */
    set(key, value) {
      const index = this._hash(key);
      if (this.table[index]) {
        for (let i = 0; i < this.table[index].length; i++) {
          if (this.table[index][i][0] === key) {
            this.table[index][i][1] = value;
            return;
          }
        }
        this.table[index].push([key, value]);
      } else {
        this.table[index] = [];
        this.table[index].push([key, value]);
      }
      this.size++;
    }
  
    /**
     * Retrieves the value associated with the given key.
     * @param {string} key - The key to search for.
     * @returns {*} - The value associated with the key, or undefined if not found.
     */
    get(key) {
      const index = this._hash(key);
      if (this.table[index]) {
        for (let i = 0; i < this.table[index].length; i++) {
          if (this.table[index][i][0] === key) {
            return this.table[index][i][1];
          }
        }
      }
      return undefined;
    }
  
    /**
     * Removes a key-value pair from the hash table.
     * @param {string} key - The key to remove.
     * @returns {boolean} - True if the key was removed successfully, false otherwise.
     */
    remove(key) {
      const index = this._hash(key);
      if (this.table[index] && this.table[index].length) {
        for (let i = 0; i < this.table[index].length; i++) {
          if (this.table[index][i][0] === key) {
            this.table[index].splice(i, 1);
            this.size--;
            return true;
          }
        }
      }
      return false;
    }
  
    /**
     * Displays the contents of the hash table.
     */
    display() {
      this.table.forEach((values, index) => {
        const chainedValues = values.map(([key, value]) => `[ ${key}: ${value} ]`);
        console.log(`${index}: ${chainedValues}`);
      });
    }
  }
  