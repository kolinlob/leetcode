/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  if (intervals.length < 2) return intervals;

  let merged = [];
  intervals.sort((a, b) => a[0] - b[0]);

  let a = intervals.shift();

  while (intervals.length > 0) {
    let b = intervals.shift();
    if (b[0] > a[1]) {
      merged.push([...a]);
      a = b;
    } else a = [a[0], Math.max(a[1], b[1])];
  }

  merged.push(a);

  return merged;
};
