/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let l = 0, r = 0;

  for (let i = 0; i < s.length; i++) {
    let [left1, right1, len1] = expand(i, i);
    let [left2, right2, len2] = expand(i, i + 1);

    let [left, right, len] = len1 > len2
        ? [left1, right1, len1]
        : [left2, right2, len2];

    if (len > r - l) {
      r = right;
      l = left;
    }
  }

  return s.substring(l + 1, r);

  function expand(left, right) {
    let l1 = left, r1 = right;
    while (l1 >= 0 && r1 < s.length && s[l1] == s[r1]) {
      l1--;
      r1++;
    }

    return [l1, r1, r1 - l1];
  }
};
