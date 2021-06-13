/**
 * @param {string[]} words
 * @return {number[][]}
 */
var palindromePairs = function (words) {
  let pairs = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = i + 1; j < words.length; j++) {
      isPalindrome(words[i] + words[j]) && pairs.push([i, j]);
      isPalindrome(words[j] + words[i]) && pairs.push([j, i]);
    }
  }

  return pairs;

  function isPalindrome(str) {
    let lo = 0, hi = str.length - 1;
    while (lo <= hi) if (str[lo++] != str[hi--]) return false;
    return true;
  }
};
