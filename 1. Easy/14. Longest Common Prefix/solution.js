/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  let min = strs
    .map((x) => x.length)
    .reduce((acc, cur) => (acc < cur ? acc : cur));

  for (let i = 0; i < min; i++) {
    for (let j = 1; j < strs.length; j++) {
      if (strs[j - 1][i] != strs[j][i])
        return strs[j].substring(0, i);
    }
  }

  return strs[0].substring(0, min);
};
