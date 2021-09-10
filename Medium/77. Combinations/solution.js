/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];
  choose([], 1);
  return res;

  function choose(cur, start) {
    if (cur.length == k)
        return res.push(cur);

    for (let i = start; i <= n; i++)
        choose([...cur, i], i + 1);
  }
};
