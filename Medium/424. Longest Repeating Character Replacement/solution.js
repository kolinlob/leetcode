/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let map = {},
    maxRepeated = 0,
    maxLen = 0;

  for (let i = 0, j = 0; i < s.length; i++) {
    map[s[i]] = map[s[i]] + 1 || 1;
    maxRepeated = Math.max(maxRepeated, map[s[i]]);

    if (i - j + 1 - maxRepeated > k) {
      map[s[j]] -= 1;
      j++;
    }

    maxLen = Math.max(maxLen, i - j + 1);
  }

  return maxLen;
};
