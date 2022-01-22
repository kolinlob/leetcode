/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let len = 1, max = 1;

  for (let i = 1; i < nums.length; i++) {
    len = nums[i] > nums[i - 1] ? len + 1 : 1;
    max = len > max ? len : max;
  }

  return max;
};
