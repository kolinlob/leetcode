/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
  const map = nums.reduce((m, c) => {
    m[c] = 1 + (m[c] || 0);
    return m;
  }, {});

  return Object.values(map).reduce((pairs, n) => pairs + (n * (n - 1)) / 2, 0);
};
