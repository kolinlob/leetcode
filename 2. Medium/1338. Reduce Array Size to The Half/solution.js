/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  let map = new Map();
  for (let num of arr) {
    if (map.has(num))
        map.set(num, map.get(num) + 1);
    else
        map.set(num, 1);
  }

  const target = arr.length >> 1;
  const counts = [...map.entries()].map(([k, v]) => v).sort();

  let del = 0, residual = arr.length;
  while (residual > target) {
    residual -= counts.pop();
    del++;
  }
  return del;
};
