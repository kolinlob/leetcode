/**
 * @param {number[]} nums
 */
class FirstUnique {
  constructor(nums) {
    this.queue = [...nums];
    this.map = nums.reduce((m, c) => {
      m[c] = 1 + (m[c] || 0);
      return m;
    }, {});

    while (this.queue.length > 0 && this.map[this.queue[0]] > 1)
      this.queue.shift();
  }

  /**
   * @return {number}
   */
  showFirstUnique = () => this.queue[0] ?? -1;

  /**
   * @param {number} value
   * @return {void}
   */
  add = (value) => {
    this.queue.push(value);
    this.map[value] = 1 + (this.map[value] || 0);
    while (this.queue.length > 0 && this.map[this.queue[0]] > 1)
      this.queue.shift();
  };
}
