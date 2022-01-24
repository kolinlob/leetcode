function wordBreak(s: string, wordDict: string[]): boolean {
  let dict = new Set(wordDict);

  let dp = new Array(s.length + 1).fill(false);
  dp[0] = true;

  for (let i = 1; i < dp.length; ++i)
    for (let j = 0; j < i; ++j)
      if (dp[j] && dict.has(s.slice(j, i)))
        dp[i] = true;

  return dp[s.length];
}
