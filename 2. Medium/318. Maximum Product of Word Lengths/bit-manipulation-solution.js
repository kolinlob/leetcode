/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  let nums = words.map(wordToNumber);
  let max = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++)
      if ((nums[i] & nums[j]) == 0)
        max = Math.max(max, words[i].length * words[j].length);
  }

  return max;

  function wordToNumber(w) {
    let base = "a".charCodeAt(0);
    let num = 0;
    for (let i = 0; i < w.length; i++) {
      num |= 1 << (w.charCodeAt(i) - base);
    }

    return num;
  }
};
