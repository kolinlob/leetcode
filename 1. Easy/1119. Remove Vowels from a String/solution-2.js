/**
 * @param {string} s
 * @return {string}
 */
var removeVowels = function (s) {
  let vowels = new Set(["a", "e", "i", "o", "u"]);

  let res = "";
  for (let i = 0; i < s.length; i++)
    if (!vowels.has(s[i])) res += s[i];

  return res;
};
