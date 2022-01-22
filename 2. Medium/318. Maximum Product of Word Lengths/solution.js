/**
 * @param {string[]} words
 * @return {number}
 */
var maxProduct = function (words) {
  let max = 0;
  for (let i = 0; i < words.length - 1; i++) {
    loop: for (let j = i + 1; j < words.length; j++) {
      for (let ch of words[j]) {
        if (words[i].includes(ch)) continue loop;
      }
      max = Math.max(max, words[i].length * words[j].length);
    }
  }

  return max;
};
