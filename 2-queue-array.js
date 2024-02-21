class Queue {
  #values = [];

  enqueue(data) {
    this.#values.push(data)
  }

  dequeue() {
    return this.#values.shift();
  }

  peek() {
    return this.#values[0]
  }

  isEmpty() {
    return this.#values.length === 0;
  }

  getSize() {
    return this.#values.length;
  }
}