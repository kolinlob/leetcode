/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let cur = -Infinity, max = -Infinity;

  for (let num of nums) {
    cur = Math.max(cur + num, num);
    max = Math.max(cur, max);
  }

  return max;
};
