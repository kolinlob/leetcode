/**
 * @param {number[][]} dungeon
 * @return {number}
 */
var calculateMinimumHP = function (dungeon) {
  let m = dungeon.length,
    n = dungeon[0].length,
    dp = [...new Array(m + 1)].map(() => new Array(n + 1).fill(Infinity));

  dp[m - 1][n] = 1;
  dp[m][n - 1] = 1;

  for (let row = m - 1; row >= 0; row--) {
    for (let col = n - 1; col >= 0; col--) {
      let min = Math.min(dp[row + 1][col], dp[row][col + 1]) - dungeon[row][col];
      dp[row][col] = min > 0 ? min : 1;
    }
  }

  return dp[0][0];
};
