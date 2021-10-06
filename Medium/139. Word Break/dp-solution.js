/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let set = new Set(wordDict);

  let dp = new Array(s.length + 1)
    .fill(null)
    .map(() => new Array(s.length + 1).fill(false));

  dp[0][0] = true;

  for (let i = 1; i < dp.length; i++)
    for (let j = i; j < dp[i].length; j++)
      if (set.has(s.slice(i - 1, j)))
        dp[i][j] = adj(i, i - 1);

  for (let i = 0; i < dp.length; i++)
    if (dp[i][s.length])
        return true;

  return false;

  function adj(row, col) {
    while (row >= 0)
        if (dp[row--][col])
            return true;

    return false;
  }
};
