/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let max = 0, len = 0, left = 0, right = 0;
  let set = new Set();

  while (left < s.length && right < s.length) {
    if (set.has(s[right])) {
      len--;
      set.delete(s[left++]);
    } else {
      len++;
      max = Math.max(max, len);
      set.add(s[right++]);
    }
  }

  return max;
};
