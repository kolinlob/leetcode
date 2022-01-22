/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let map = {};
  for (let i = 0; i < s.length; i++)
    map[s[i]] = map[s[i]] + 1 || 1;

  const sortedmap = Object.keys(map).sort((a, b) => map[b] - map[a]);
  return sortedmap.reduce((res, c) => (res += c.repeat(map[c])), "");
};
