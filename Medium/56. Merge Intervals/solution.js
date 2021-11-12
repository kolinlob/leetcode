/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  let merged = [];
  intervals.sort((a, b) => a[0] - b[0]);

  while (intervals.length > 0) {
    let a = intervals.shift();

    if (intervals.length > 0) {
      let b = intervals.shift();

      if (b[0] > a[1]) {
        intervals.unshift(b);
        merged.push(a);
      } else intervals.unshift([a[0], Math.max(a[1], b[1])]);
    } else merged.push(a);
  }

  return merged;
};
