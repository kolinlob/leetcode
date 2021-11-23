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
    if (this.smaller.size() == 0 || this.smaller.front().element >= num)
      this.smaller.enqueue(num);
    else this.larger.enqueue(num);

    if (this.smaller.size() > this.larger.size() + 1)
      this.larger.enqueue(this.smaller.dequeue().element);
    else if (this.larger.size() > this.smaller.size())
      this.smaller.enqueue(this.larger.dequeue().element);
  }

  /**
   * @return {number}
   */
  findMedian() {
    if (this.smaller.size() > this.larger.size())
      return this.smaller.front().element;
    else
      return (this.smaller.front().element + this.larger.front().element) / 2;
  }
}
