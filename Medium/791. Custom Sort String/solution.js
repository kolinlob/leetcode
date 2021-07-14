/**
 * @param {string} order
 * @param {string} str
 * @return {string}
 */
var customSortString = function (order, str) {
  const sort = order
    .split("")
    .reduce((map, ch, i) => map.set(ch, i), new Map());

  return str
    .split("")
    .sort((a, b) => (sort.get(a) ?? 0) - (sort.get(b) ?? 0))
    .join("");
};
