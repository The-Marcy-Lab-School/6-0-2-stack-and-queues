# 6-0-2-stack-and-queues

In this lecture were will be focusing on the following

How does the ordering of stack differ from the ordering of items in a queue?

Where do we see stacks and queues in the real world?

What are common use cases for stacks and queues in computer science?

## What is a stack?

A stack is a Abstract data type that usually holds elements in sequential and ordered elements. They use a principle of last in first out (**LIFO**). This can be achieved by using the following operations:

push — This operation is responsible for inserting or pushing a new element to the stack.

pop — This operation is responsible for removing the most recent element from the stack.

## Mental Models

Stacks: last in first out (LIFO)

Imagine you have a stack of pancakes you wouldn't normally eat the one at the bottom of the stack, which would have been your first one on the plate. You would almost certainly eat the one top first. Since it was the last one on it would be the first one out

Another example! Let stay you have a bunch of plates you wouldn't try to take the one all of the way at the bottom. You need to take the one that is on the top of the stack ... again that was probably the last one in, so it would be the first one out.

```js
// Simple stack

const stack = [];
const push = (element) => stack.push(item); //O(1)
const pop = () => stack.pop(); //O(1)

//Using ES6 classes

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

  getLength() {
    return this.#values.length;
  }
}

// Using a Linked List

// *** linked list code ***

class Stack {
  #stack = new LinkedList();

  push(data) {
    this.#stack.appendToTail(data);
  }

  pop() {
    return this.#stack.removeFromTail();
  }

  peek() {
    return this.#stack.tail;
  }

  isEmpty() {
    return this.#stack.length() === 0;
  }

  getSize() {
    return this.#stack.length();
  }

  print() {
    this.#stack.print()
  }
}
```

## Stack Overflow

A stack overflow occurs when a program tries to use more memory space than the stack can hold. The stack is a region of memory used for storing temporary data, such as function call frames and local variables. Each time a function is called, a new frame is added to the stack, and each time a function returns, its frame is removed. When the stack becomes full and there is no more space for new frames, a stack overflow occurs. This can lead to the program crashing or behaving in unexpected ways. It can also be caused by infinite recursion, where a function calls itself endlessly without returning, filling up the stack with repeated call frames.

## What is a queue?

A queue is a Abstract data type, similar to the stack, of sequential and ordered elements. The queue differ by using first in first out, or FIFO, the concept that the first element in will be the first one removed.

This can be achieved by using the following 2 operations:

enqueue—This operation is responsible for inserting or pushing a new element to the queue.
dequeue—This operation is responsible for removing the oldest element from the queue.

Queues: First in first out

When you go to starbucks, wether you order ahead of time or order in person, there is usually a line. The first one who get their order in, is the first one to leave. First one in First one out

```js
const queue = [];
const enqueue = (item) => queue.push(item); // O(1)
const dequeue = () => queue.shift(); // O(n)

// Using a ES6 class:

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

  getLength() {
    return this.#values.length;
  }
}

// using a Linked List


class Queue {

  #queue = new LinkedList();

  enqueue (data) {
    this.#queue.appendToTail(data);
  }

  dequeue () {
    this.#queue.removeHead();
  }

  // add the rest based on what you know about linked lists
}
```
