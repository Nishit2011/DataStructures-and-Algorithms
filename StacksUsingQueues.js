// Runtime Complexity
// push(): Constant, O(1).

// pop(): Linear, O(n).

// Memory Complexity
// Linear, O(n).

class stack_using_queue {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(data) {
    this.queue1.push(data);
  }

  isEmpty() {
    return this.queue1.length + this.queue2.length === 0;
  }

  swap_queueus() {
    [this.queue1, this.queue2] = [this.queue2, this.queue1];
  }

  pop() {
    if (this.isEmpty()) {
      return "Stack is empty";
    }

    // If stack size is 0, throw exception.
    // If queue1 has element(s), dequeue all elements from queue1 and enqueue on queue2 except the last element.
    // The last element found above will be returned but before that swap queue1 and queue2 references.
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }
    let value = this.queue1.shift();
    this.swap_queueus();
    return value;
  }
}
