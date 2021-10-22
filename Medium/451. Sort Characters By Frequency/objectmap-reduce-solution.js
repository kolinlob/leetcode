/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let map = [...s].reduce((m, c) => {
    m[c] = m[c] + 1 || 1;
    return m;
  }, {});

  const sortedmap = Object.keys(map).sort((a, b) => map[b] - map[a]);
  return sortedmap.reduce((res, c) => (res += c.repeat(map[c])), "");
};
