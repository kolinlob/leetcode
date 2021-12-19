/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
  let f = nums.reduce((m, c) => { m[c] = 1 + (m[c] || 0); return m }, {});

  return nums.sort((a, b) => (f[a] == f[b] ? b - a : f[a] - f[b]));
};
