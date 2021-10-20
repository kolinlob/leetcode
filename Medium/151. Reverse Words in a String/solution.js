/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let words = s.split(" "),
      left = 0,
      right = words.length - 1;

  while (left <= right) {
    [words[left], words[right]] = [words[right], words[left]];
    left++;
    right--;
  }

  return words.filter((w) => w.length > 0).join(" ");
};
