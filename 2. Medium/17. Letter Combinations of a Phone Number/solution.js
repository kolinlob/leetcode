/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const map = new Map([
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]],
  ]);

  const res = [];
  digits.length && bt("", 0);
  return res;

  function bt(cur, ix) {
    if (cur.length == digits.length)
        return res.push(cur);

    for (let ch of map.get(digits[ix]))
        bt(cur + ch, ix + 1);
  }
};
