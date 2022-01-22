/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
  this.original = [...nums];
};

/**
 * Resets the array to its original configuration and return it.
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return [...this.original];
};

/**
 * Returns a random shuffling of the array.
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const shuffled = [...this.original];

  for (let i = 0; i < shuffled.length; i++) {
    let r = (Math.random() * (shuffled.length - i) + i) >> 0;
    [shuffled[i], shuffled[r]] = [shuffled[r], shuffled[i]];
  }

  return shuffled;
};
