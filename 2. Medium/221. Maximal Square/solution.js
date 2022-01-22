/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const m = matrix.length,
        n = matrix[0].length,
        dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));

  let max = 0;
  for (let i = 1; i < m + 1; ++i)
    for (let j = 1; j < n + 1; ++j)
      if (matrix[i - 1][j - 1] == "1") {
        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
        max = Math.max(max, dp[i][j]);
      }

  return max ** 2;
};
