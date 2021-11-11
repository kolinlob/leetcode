/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
  let start = nums[0] < 1 ? 1 - nums[0] : 1,
      sum = start;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum < 1) {
      start += 1 - sum;
      sum = 1;
    }
  }

  return start;
};
