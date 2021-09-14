/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
  let left = 0,
    right = s.length - 1,
    strArr = s.split("");

  while (left < right) {
    if (!letter(strArr[left])) {
      left++;
      continue;
    }

    if (!letter(strArr[right])) {
      right--;
      continue;
    }

    [strArr[left], strArr[right]] = [strArr[right], strArr[left]];
    left++;
    right--;
  }

  return strArr.join("");

  function letter(str) {
    return str.match(/^[a-z]$/i);
  }
};
