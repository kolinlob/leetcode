/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */
var depthSumInverse = function (nestedList) {
  let max = -Infinity;
  return flat(nestedList, 1).reduce((s, [n, d]) => s + (max - d + 1) * n, 0);

  function flat(nested, depth) {
    let res = [];
    for (let item of nested) {
      if (item.isInteger()) {
        res.push([item.getInteger(), depth]);
        max = Math.max(max, depth);
      } else res.push(...flat(item.getList(), depth + 1));
    }
    return res;
  }
};
