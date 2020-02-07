class queue_using_stack {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(data) {
    this.stack1.push(data);
  }
  empty() {
    return this.stack1.length === 0 && this.stack2.length === 0;
  }

  dequeue() {
    if (this.empty()) {
      throw "stack is empty";
    }

    if (this.stack2.length === 0) {
      while (this.stack1.length !== 0) {
        this.stack2.push(this.stack1.pop());
      }
    }
    return this.stack2.pop();
  }
}
