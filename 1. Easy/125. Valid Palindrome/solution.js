/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  let letters = s.replace(/[^0-9a-zA-Z]/g, "").toLowerCase();
  let left = 0, right = letters.length - 1;
  
  while (left <= right) {
    if (letters[left++] != letters[right--])
        return false;
  }

  return true;
};
