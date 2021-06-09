/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let chars = new Array(26).fill(0);
  const base = "a".charCodeAt();

  for (let ch of s) chars[ch.charCodeAt() - base] += 1;

  for (let i = 0; i < s.length; i++) {
    if (chars[s[i].charCodeAt() - base] == 1) return i;
  }

  return -1;
};
