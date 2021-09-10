/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function (s) {
  const res = [];
  permute("", 0);
  return res;

  function permute(cur, start) {
    if (cur.length == s.length) return res.push(cur);
    if (s[start] >= 0 && s[start] <= 9) permute(cur + s[start], start + 1);
    else {
      permute(cur + s[start]?.toLowerCase(), start + 1);
      permute(cur + s[start]?.toUpperCase(), start + 1);
    }
  }
};
