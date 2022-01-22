/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function (s) {
  let vowels = new Set(["a", "e", "i", "o", "u"]);

  let str = s.split("");
  for (let i = 0; i < str.length; i++)
    if (vowels.has(str[i])) str[i] = undefined;

  return str.join("");
};
