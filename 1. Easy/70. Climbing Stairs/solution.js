/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = new Array(n + 1);
  return step(n);

  function step(k) {
    if (k <= 0) return 0;
    if (k == 1) return 1;
    if (k == 2) return 2;

    dp[k - 1] ??= step(k - 1);
    dp[k - 2] ??= step(k - 2);

    return dp[k - 1] + dp[k - 2];
  }
};
