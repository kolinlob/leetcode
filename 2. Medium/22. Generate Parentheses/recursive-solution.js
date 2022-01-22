/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const res = [];
  perm("", 0, 0);
  return res;

  function perm(cur, o, c) {
    if (o == n && c == n) return res.push(cur);

    o < n && perm(cur + "(", o + 1, c);
    c < o && perm(cur + ")", o, c + 1);
  }
};
