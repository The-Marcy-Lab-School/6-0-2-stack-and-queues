class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {

  #length = 0;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(value) {
    const node = new Node(value);

    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }

    this.#length++;
  }

  dequeue() {
    if (this.isEmpty()) return null;

    const removed = this.head;
    this.head = this.head.next;
    this.#length--;

    if (this.isEmpty()) {
      this.tail = null;
    }

    return removed.value;
  }

  peek() {
    if (this.isEmpty()) return null;
    return this.head.value;
  }

  isEmpty() {
    return this.#length === 0;
  }

  getLength() {
    return this.#length;
  }
}
