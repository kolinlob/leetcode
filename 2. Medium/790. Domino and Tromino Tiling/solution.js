/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function (n) {
  let dp = new Array(n + 1);
  dp[0] = dp[1] = 1;
  dp[2] = 2;

  for (let i = 3; i < dp.length; ++i)
    dp[i] = (2 * dp[i - 1] + dp[i - 3]) % (1e9 + 7);

  return dp[n];
};
