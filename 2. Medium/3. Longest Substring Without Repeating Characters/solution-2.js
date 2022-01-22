/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  const map = new Map();
  let max = 0;

  for (let i = 0, k = 0; i < s.length; i++) {
    if (map.has(s[i]))
      k = Math.max(k, map.get(s[i]) + 1);

    map.set(s[i], i);
    max = Math.max(max, i - k + 1);
  }

  return max;
};
