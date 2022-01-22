/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function (nums) {
  nums.sort((a, b) => a - b);
  let n = nums.length;
  let median = nums[Math.floor(n / 2)];

  return nums.reduce((a, v) => a + Math.abs(v - median), 0);
};
