/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumberOfLIS = function (nums) {
  let dp = new Array(nums.length).fill(1);
  let counts = new Array(nums.length).fill(1);
  let longest = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        if (dp[j] + 1 > dp[i]) {
          dp[i] = dp[j] + 1;
          counts[i] = counts[j];
        } else if (dp[j] + 1 == dp[i])
            counts[i] += counts[j];
      }
    }
    longest = Math.max(longest, dp[i]);
  }

  return dp.reduce(
    (count, cur, i) => (count += cur == longest ? counts[i] : 0),
    0
  );
};
