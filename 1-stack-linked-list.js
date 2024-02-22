class Node {
  constructor(value) {
    this.value = value;
    this.next = null; 
  }
}

class Stack {

  #length = 0;

  constructor() {
    this.head = null;
    
  }

  isEmpty() {
    return this.#length === 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.#length++;
  }

  pop() {
    if (this.isEmpty()) return null;

    const removed = this.head;
    this.head = this.head.next;
    this.#length--;
    return removed.value; 
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.head.value;
  }

  getLength() {
    return this.#length;
  }
}