/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let m = word1.length,
    n = word2.length,
    dp = new Array(m + 1).fill(null).map(() => new Array(n + 1).fill(0));

  for (let i = 0; i <= m; i++)
    dp[i][0] = i;

  for (let j = 0; j <= n; j++)
    dp[0][j] = j;

  for (let j = 1; j <= n; j++)
    for (let i = 1; i <= m; i++) {
      if (word1[i - 1] == word2[j - 1])
        dp[i][j] = dp[i - 1][j - 1];
      else
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1]);
    }

  return dp[m][n];
};
