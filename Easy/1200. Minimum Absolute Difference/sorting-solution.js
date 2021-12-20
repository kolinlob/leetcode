/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  let sorted = [...arr].sort((a, b) => a - b),
      map = new Map(),
      mindiff = Infinity;

  for (let i = 1; i < sorted.length; ++i) {
    let diff = Math.abs(sorted[i - 1] - sorted[i]);

    if (!map.has(diff)) map.set(diff, []);
    map.get(diff).push([sorted[i - 1], sorted[i]]);

    mindiff = Math.min(mindiff, diff);
  }

  return map.get(mindiff);
};
