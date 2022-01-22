/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0, cur = 0;

  for (let num of nums) {
    if (num == 1) {
      cur++;
      max = Math.max(max, cur);
    } else cur = 0;
  }

  return max;
};
