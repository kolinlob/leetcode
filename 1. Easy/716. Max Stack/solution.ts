class MaxStack {
  private stack = [];
  private heap = new MaxPriorityQueue({ priority: (x: number) => x });

  push(x: number): void {
    this.stack.push(x);
    this.heap.enqueue(x);
  }

  pop(): number {
    let popped = this.stack.pop(), tmp = [], cur = null;

    while (!this.heap.isEmpty()) {
      cur = this.heap.dequeue().element;
      if (cur == popped) break;
      tmp.push(cur);
    }

    while (tmp.length) this.heap.enqueue(tmp.pop());

    return popped;
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  peekMax(): number {
    return this.heap.front().element;
  }

  popMax(): number {
    let max = this.heap.dequeue().element;
    this.stack.splice(this.stack.lastIndexOf(max), 1);
    return max;
  }
}
