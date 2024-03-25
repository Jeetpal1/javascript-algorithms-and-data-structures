/**
 * A Node class for a singly linked list.
 */
class Node {
    /**
     * Creates a new Node instance.
     * @param {*} data - The data to be stored in the node.
     */
    constructor(data) {
      this.data = data; // The payload of the node
      this.next = null; // A pointer/reference to the next node in the list
    }
  }
  
  /**
   * A LinkedList class to handle the chain of nodes.
   */
  class LinkedList {
    /**
     * Creates a new LinkedList instance.
     */
    constructor() {
      this.head = null; // The first node of the list
      this.size = 0; // A count of nodes in the list for convenience
    }
  
    /**
     * Adds a new node with the given data to the end of the list.
     * @param {*} data - The data for the new node.
     */
    append(data) {
      const newNode = new Node(data);
  
      // If the list is empty, the new node is the head
      if (!this.head) {
        this.head = newNode;
      } else {
        // Otherwise, traverse to the end and append the new node
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
      this.size++;
    }
  
    /**
     * Inserts a new node with the given data at the specified index.
     * @param {*} data - The data for the new node.
     * @param {number} index - The index at which to insert the new node.
     * @returns {boolean} - Indicates if the insertion was successful.
     */
    insertAt(data, index) {
      if (index < 0 || index > this.size) return false; // Invalid index
  
      const newNode = new Node(data);
      let current = this.head;
      let previous;
  
      if (index === 0) {
        newNode.next = head;
        this.head = newNode;
      } else {
        for (let i = 0; i < index; i++) {
          previous = current;
          current = current.next;
        }
        newNode.next = current;
        previous.next = newNode;
      }
      this.size++;
      return true;
    }
  
    /**
     * Removes the node at the specified index from the list.
     * @param {number} index - The index of the node to be removed.
     * @returns {*} - The data of the removed node or null if the index is invalid.
     */
    removeFrom(index) {
      if (index < 0 || index >= this.size) return null; // Invalid index
  
      let current = this.head;
      let previous;
      let i = 0;
  
      // If it's the first node (head of the list)
      if (index === 0) {
        this.head = current.next;
      } else {
        // Find the right location in the list
        while (i < index) {
          i++;
          previous = current;
          current = current.next;
        }
        // Skip the current, thus removing it
        previous.next = current.next;
      }
      this.size--;
      return current.data;
    }
  
    /**
     * Finds the index of the node containing the given data.
     * @param {*} data - The data to find in the list.
     * @returns {number} - The index of the node or -1 if not found.
     */
    indexOf(data) {
      let current = this.head;
      let index = 0;
  
      while (current) {
        if (current.data === data) return index;
        index++;
        current = current.next;
      }
  
      return -1; // Not found
    }
  
    /**
     * Checks if the list is empty.
     * @returns {boolean} - True if the list is empty, false otherwise.
     */
    isEmpty() {
      return this.size === 0;
    }
  
    /**
     * Gets the size of the linked list.
     * @returns {number} - The number of nodes in the list.
     */
    getSize() {
      return this.size;
    }
  
    /**
     * Converts the list to a string representation.
     * @returns {string} - A string representing the linked list.
     */
    toString() {
      let current = this.head;
      let string = '';
  
      while (current) {
        string += `${current.data} -> `;
        current = current.next;
      }
  
      return string + 'null';
    }
  }
  
  // Example usage:
  const ll = new LinkedList();
  ll.append(10);
  ll.append(20);
  ll.insertAt(15, 1);
  console.log(ll.toString()); // Should display "10 -> 15 -> 20 -> null"
  