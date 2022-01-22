/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
  const convert = (w) => Number(w.split("").map((c) => c.charCodeAt(0) - "a".charCodeAt(0)).join(""));

  return convert(firstWord) + convert(secondWord) == convert(targetWord);
};
