class Stack {
  #values = [];

  push(data) {
    this.#values.push(data)
  }

  pop() {
    return this.#values.pop();
  }

  peek() {
    return this.#values[this.#values.length - 1]
  }

  isEmpty() {
    return this.#values.length === 0;
  }

  getSize() {
    return this.#values.length;
  }
}


