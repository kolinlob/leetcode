/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let start = 0,
    end = s.length - 1;
  while (start <= end) {
    if (s[start++] != s[end--])
      return isPalindrome(start - 1, end) || isPalindrome(start, end + 1);
  }
  return true;

  function isPalindrome(lo, hi) {
    while (lo <= hi) {
      if (s[lo++] != s[hi--])
        return false;
    }

    return true;
  }
};
