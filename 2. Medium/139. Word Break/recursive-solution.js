/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let dict = new Set(wordDict);
  let memo = new Map();

  return canBreak(s);

  function canBreak(word) {
    if (word == "") return true;
    if (dict.has(word)) return true;
    if (memo.has(word)) return memo.get(word);

    for (let i = 0; i < word.length; i++) {
      if (dict.has(word.slice(0, i + 1)) && canBreak(word.slice(i + 1))) {
        memo.set(word.slice(0, i + 1), true);
        return true;
      }
    }

    memo.set(word, false);
    return false;
  }
};
