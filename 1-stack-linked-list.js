class Node {
  constructor(value) {
    this.value = value;
    this.next = null; 
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) return null;

    const removed = this.head;
    this.head = this.head.next;
    this.size--;
    return removed.value; 
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.head.value;
  }

  getSize() {
    return this.size;
  }
}