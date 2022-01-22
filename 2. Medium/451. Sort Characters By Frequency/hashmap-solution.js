/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let arr = s.split("");
  let map = arr.reduce((m, c) => m.set(c, 1 + (m.get(c) ?? 0)), new Map());
  return arr
    .sort((a, b) =>
      map.get(b) == map.get(a)
        ? a.charCodeAt(0) - b.charCodeAt(0)
        : map.get(b) - map.get(a)
    )
    .join("");
};
