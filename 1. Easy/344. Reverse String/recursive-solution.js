/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  reverse(0, s.length - 1);

  function reverse(lo, hi) {
    if (lo >= hi) return;

    [s[hi], s[lo]] = [s[lo], s[hi]];

    reverse(lo + 1, hi - 1);
  }
};
