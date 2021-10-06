/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
  let set = new Set(wordDict);
  return canBreak(s);

  function canBreak(word) {
    if (word == "") return true;

    for (let i = 0; i < word.length; i++)
      if (set.has(word.slice(0, i + 1)) && canBreak(word.slice(i + 1)))
        return true;

    return false;
  }
};
