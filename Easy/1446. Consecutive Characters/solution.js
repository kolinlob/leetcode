/**
 * @param {string} s
 * @return {number}
 */
var maxPower = function (s) {
  let pow = 1, maxPow = 1;

  for (let i = 1; i < s.length; ++i) {
    pow = s[i - 1] == s[i] ? pow + 1 : 1;
    maxPow = Math.max(maxPow, pow);
  }

  return maxPow;
};
