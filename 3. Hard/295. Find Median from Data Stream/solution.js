class MedianFinder {
  constructor() {
    this.smaller = new MaxPriorityQueue();
    this.larger = new MinPriorityQueue();
  }

  /**
   * @param {number} num
   * @return {void}
   */
  addNum(num) {
    this.smaller.enqueue(num);
    this.larger.enqueue(this.smaller.dequeue().element);

    if (this.larger.size() > this.smaller.size())
      this.smaller.enqueue(this.larger.dequeue().element);
  }

  /**
   * @return {number}
   */
  findMedian() {
    return this.smaller.size() > this.larger.size()
      ? this.smaller.front().element
      : (this.smaller.front().element + this.larger.front().element) / 2;
  }
}
