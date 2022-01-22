/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const dp = [...nums];
  dp[1] = Math.max(dp[0], dp[1] ?? 0);

  for (let i = 2; i < nums.length; i++)
    dp[i] = Math.max(dp[i] + dp[i - 2], dp[i - 1]);

  return dp[dp.length - 1];
};
