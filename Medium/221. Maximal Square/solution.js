/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length,
    dp = new Array(m).fill(null).map(() => new Array(n).fill(0));

  let max = 0;
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (matrix[i][j] == "1") {
        dp[i][j] = 1;
        if (
          i > 0 &&
          j > 0 &&
          matrix[i - 1][j - 1] == "1" &&
          matrix[i][j - 1] == "1" &&
          matrix[i - 1][j] == "1"
        )
          dp[i][j] = (1 + Math.sqrt(Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]))) ** 2;
        max = Math.max(max, dp[i][j]);
      }
    }
  }

  return max;
};
