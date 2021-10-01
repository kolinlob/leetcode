/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  let m = text1.length, n = text2.length;
  let dp = new Array(m + 1).fill(null).map((x) => new Array(n + 1).fill(0));

  for (let i = 1; i < dp.length; i++) {
    for (let j = 1; j < dp[i].length; j++) {
      dp[i][j] = text1[i - 1] == text2[j - 1]
          ? 1 + dp[i - 1][j - 1]
          : Math.max(dp[i - 1][j], dp[i][j - 1]);
    }
  }

  return dp[m][n];
};
