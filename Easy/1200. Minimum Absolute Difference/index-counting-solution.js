/**
 * @param {number[]} arr
 * @return {number[][]}
 */
var minimumAbsDifference = function (arr) {
  let min = Infinity;
  let max = -Infinity;
  let shift = -min;

  for (let num of arr) {
    min = Math.min(min, num);
    max = Math.max(max, num);
  }

  let line = new Array(max - min + 1).fill(0);
  for (let num of arr) line[num + shift]++;

  let mindiff = max - min;
  let prev = 0;
  let map = new Map();

  for (let i = 1; i <= max + shift; ++i) {
    if (line[i] == 0) continue;
    let diff = Math.abs(i - prev);

    if (!map.has(diff)) map.set(diff, []);
    map.get(diff).push([prev - shift, i - shift]);

    mindiff = Math.min(diff, mindiff);
    prev = i;
  }

  return map.get(mindiff);
};
