/**
 * @param {number[]} nums
 * @return {number}
 */
var numberOfArithmeticSlices = function (nums) {
  let slices = 0;
  let dp = new Array(nums.length).fill(0);

  for (let i = 2; i < nums.length; i++) {
    if (nums[i - 2] - nums[i - 1] == nums[i - 1] - nums[i]) {
      dp[i] = 1 + dp[i - 1];
      slices += dp[i];
    }
  }

  return slices;
};
