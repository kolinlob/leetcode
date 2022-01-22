/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let map = nums.reduce((m, c) => {
    m[c] = 1 + (m[c] || 0);
    return m;
  }, {});

  return Object.entries(map)
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => k)
    .slice(0, k);
};
